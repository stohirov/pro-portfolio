import { OPENSOURCE } from "@/lib/data";

export default function OpenSource() {
  return (
    <section id="opensource">
      <div className="eyebrow">Open Source</div>
      <div className="projects">
        {OPENSOURCE.map((p, i) => (
          <div className="card" key={i}>
            <h3>
              {p.name} <span className="kind">{p.kind}</span>
            </h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
