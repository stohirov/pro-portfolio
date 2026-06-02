import { SKILLS } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="eyebrow">Skills</div>
      {SKILLS.map((g, i) => (
        <div className="skillgroup" key={i}>
          <div className="cat">{g.cat}</div>
          <div className="tags">
            {g.items.map(([name, key], k) => (
              <span key={k} className={key ? "key" : ""}>
                {name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
