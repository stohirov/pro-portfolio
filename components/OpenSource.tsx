import { OPENSOURCE } from "@/lib/data";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

export default function OpenSource() {
  return (
    <section id="opensource">
      <SectionHead index="03" title="Open Source" note="UPSTREAM WORK" />
      <div className="projects">
        {OPENSOURCE.map((p, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="card">
              <h3>
                {p.name}
                <span className={`kind${p.kind === "building" ? " building" : ""}`}>{p.kind}</span>
              </h3>
              <p>{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
