"use client";

import { useEffect, useRef } from "react";

/*
 * A living architecture diagram: labelled service boxes sit above and
 * below a horizontal kafka event bus. Packets drop from a service onto
 * the bus, ride it, and climb into their destination — which flashes on
 * arrival. Some services also talk over direct elbow connectors.
 */

const ACCENT = "58, 169, 255";
const INK = "231, 234, 238";

type BoxDef = { x: number; y: number; label: string };

const BOXES: BoxDef[] = [
  // above the bus
  { x: 0.07, y: 0.16, label: "gateway" },
  { x: 0.23, y: 0.07, label: "auth" },
  { x: 0.33, y: 0.31, label: "match-engine" },
  { x: 0.5, y: 0.12, label: "pricing" },
  { x: 0.66, y: 0.28, label: "payouts" },
  { x: 0.82, y: 0.09, label: "notify" },
  // below the bus
  { x: 0.16, y: 0.8, label: "redis" },
  { x: 0.4, y: 0.88, label: "postgres" },
  { x: 0.66, y: 0.78, label: "ledger" },
  { x: 0.88, y: 0.88, label: "clickhouse" },
];

const BUS_Y = 0.55;
// service pairs that talk directly via elbow connectors (indices into BOXES)
const DIRECT: [number, number][] = [
  [0, 1],
  [0, 2],
  [3, 4],
  [1, 3],
];

const PACKET_COUNT = 12;

type Pt = { x: number; y: number };
type Box = { cx: number; cy: number; w: number; h: number; label: string };
type Packet = { route: Pt[]; lens: number[]; total: number; d: number; speed: number; target: number };

function pointAt(route: Pt[], lens: number[], d: number): Pt {
  let i = 0;
  while (i < lens.length - 1 && d > lens[i]) {
    d -= lens[i];
    i++;
  }
  const a = route[i];
  const b = route[i + 1];
  const t = lens[i] === 0 ? 0 : Math.min(Math.max(d / lens[i], 0), 1);
  return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
}

function measureRoute(route: Pt[]): { lens: number[]; total: number } {
  const lens: number[] = [];
  let total = 0;
  for (let i = 0; i < route.length - 1; i++) {
    const l = Math.hypot(route[i + 1].x - route[i].x, route[i + 1].y - route[i].y);
    lens.push(l);
    total += l;
  }
  return { lens, total };
}

export default function FlowField() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const canvas = document.createElement("canvas");
    wrap.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    let busY = 0;
    let boxes: Box[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = wrap.clientWidth;
      h = wrap.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      busY = BUS_Y * h;
      ctx.font = "10px ui-monospace, Menlo, monospace";
      boxes = BOXES.map((b) => ({
        cx: b.x * w,
        cy: b.y * h,
        w: ctx.measureText(b.label).width + 24,
        h: 24,
        label: b.label,
      }));
    };
    resize();

    // anchor on the box edge that faces the bus
    const busAnchor = (b: Box): Pt => ({
      x: b.cx,
      y: b.cy < busY ? b.cy + b.h / 2 : b.cy - b.h / 2,
    });

    const busRoute = (a: number, t: number): Pt[] => {
      const pa = busAnchor(boxes[a]);
      const pb = busAnchor(boxes[t]);
      return [pa, { x: pa.x, y: busY }, { x: pb.x, y: busY }, pb];
    };

    const elbowRoute = (a: number, t: number): Pt[] => {
      const ba = boxes[a];
      const bt = boxes[t];
      const start: Pt = { x: ba.cx + (bt.cx > ba.cx ? ba.w / 2 : -ba.w / 2), y: ba.cy };
      const end: Pt = { x: bt.cx, y: bt.cy + (ba.cy > bt.cy ? bt.h / 2 : -bt.h / 2) };
      return [start, { x: end.x, y: start.y }, end];
    };

    const pulses = BOXES.map(() => 0);
    let seed = 7;
    const rand = () => {
      // deterministic-ish PRNG so spawns vary without Math.random in render path
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };

    const spawn = (p: Packet) => {
      let route: Pt[];
      let target: number;
      if (rand() < 0.28) {
        const pair = DIRECT[Math.floor(rand() * DIRECT.length)];
        const flip = rand() < 0.5;
        const a = flip ? pair[1] : pair[0];
        target = flip ? pair[0] : pair[1];
        route = elbowRoute(a, target);
      } else {
        const a = Math.floor(rand() * boxes.length);
        let t = Math.floor(rand() * boxes.length);
        if (t === a) t = (t + 1 + Math.floor(rand() * (boxes.length - 1))) % boxes.length;
        target = t;
        route = busRoute(a, t);
      }
      const m = measureRoute(route);
      p.route = route;
      p.lens = m.lens;
      p.total = m.total;
      p.speed = (0.09 + rand() * 0.09) * w;
      p.d = -p.speed * rand() * 2.2; // negative = waiting to depart
      p.target = target;
    };

    const packets: Packet[] = Array.from({ length: PACKET_COUNT }, () => {
      const p: Packet = { route: [], lens: [], total: 0, d: 0, speed: 0, target: 0 };
      spawn(p);
      return p;
    });

    const roundRect = (x: number, y: number, rw: number, rh: number, r: number) => {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + rw, y, x + rw, y + rh, r);
      ctx.arcTo(x + rw, y + rh, x, y + rh, r);
      ctx.arcTo(x, y + rh, x, y, r);
      ctx.arcTo(x, y, x + rw, y, r);
      ctx.closePath();
    };

    const drawBase = () => {
      ctx.clearRect(0, 0, w, h);

      // vertical stubs from every box down/up to the bus
      ctx.strokeStyle = `rgba(${INK}, 0.06)`;
      ctx.lineWidth = 1;
      for (const b of boxes) {
        const a = busAnchor(b);
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(a.x, busY);
        ctx.stroke();
      }

      // direct elbow connectors
      for (const [a, t] of DIRECT) {
        const route = elbowRoute(a, t);
        ctx.beginPath();
        ctx.moveTo(route[0].x, route[0].y);
        for (let i = 1; i < route.length; i++) ctx.lineTo(route[i].x, route[i].y);
        ctx.stroke();
      }

      // the event bus
      ctx.strokeStyle = `rgba(${ACCENT}, 0.2)`;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(0.02 * w, busY);
      ctx.lineTo(0.98 * w, busY);
      ctx.stroke();
      // junction ticks where stubs meet the bus
      ctx.fillStyle = `rgba(${ACCENT}, 0.35)`;
      for (const b of boxes) {
        ctx.fillRect(b.cx - 1.5, busY - 1.5, 3, 3);
      }
      ctx.fillStyle = `rgba(${ACCENT}, 0.5)`;
      ctx.textBaseline = "middle";
      ctx.textAlign = "right";
      ctx.fillText("event-bus // kafka", 0.9 * w, busY - 11);
      ctx.textAlign = "left";

      // service boxes
      for (let i = 0; i < boxes.length; i++) {
        const b = boxes[i];
        const pulse = pulses[i];
        roundRect(b.cx - b.w / 2, b.cy - b.h / 2, b.w, b.h, 4);
        ctx.fillStyle = "rgba(10, 13, 17, 0.92)";
        ctx.fill();
        if (pulse > 0) {
          ctx.strokeStyle = `rgba(${ACCENT}, ${0.3 + pulse * 0.6})`;
          ctx.shadowColor = `rgba(${ACCENT}, ${pulse * 0.7})`;
          ctx.shadowBlur = 14 * pulse;
        } else {
          ctx.strokeStyle = `rgba(${INK}, 0.22)`;
        }
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.shadowBlur = 0;
        ctx.fillStyle = `rgba(${INK}, ${0.45 + pulse * 0.45})`;
        ctx.textBaseline = "middle";
        ctx.fillText(b.label, b.cx - (b.w - 24) / 2, b.cy + 0.5);
      }
    };

    if (reduced) {
      drawBase();
      const onResize = () => {
        resize();
        drawBase();
      };
      window.addEventListener("resize", onResize);
      return () => {
        window.removeEventListener("resize", onResize);
        canvas.remove();
      };
    }

    let raf = 0;
    let last = performance.now();

    const frame = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      for (let i = 0; i < pulses.length; i++) {
        if (pulses[i] > 0) pulses[i] = Math.max(0, pulses[i] - dt * 1.3);
      }

      drawBase();

      for (const p of packets) {
        p.d += p.speed * dt;
        if (p.d > p.total) {
          pulses[p.target] = 1;
          spawn(p);
          continue;
        }
        if (p.d < 0) continue;
        // comet trail along the route
        for (let k = 5; k >= 1; k--) {
          const td = p.d - k * 7;
          if (td < 0) continue;
          const tp = pointAt(p.route, p.lens, td);
          ctx.beginPath();
          ctx.arc(tp.x, tp.y, 1.3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${ACCENT}, ${0.45 * (1 - k / 6)})`;
          ctx.fill();
        }
        const head = pointAt(p.route, p.lens, p.d);
        ctx.beginPath();
        ctx.arc(head.x, head.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${ACCENT}, 0.95)`;
        ctx.shadowColor = `rgba(${ACCENT}, 0.8)`;
        ctx.shadowBlur = 9;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    const onResize = () => {
      resize();
      // routes are stale after a resize — respawn everything
      for (const p of packets) spawn(p);
    };
    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden) {
        last = performance.now();
        raf = requestAnimationFrame(frame);
      }
    };
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      canvas.remove();
    };
  }, []);

  return <div ref={wrapRef} className="flowfield" aria-hidden="true" />;
}
