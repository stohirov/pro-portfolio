import { SKILLS } from "@/lib/data";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills">
      <SectionHead index="02" title="Stack" note="WHAT I SHIP WITH" />
      <Reveal>
        <div className="spec">
          <div className="spec-head">
            <span className="dots">
              <i />
              <i />
              <i />
            </span>
            ~/stack/services.yaml
          </div>
          {SKILLS.map((g, i) => (
            <div className="skillgroup" key={i}>
              <div className="cat">{g.cat.toLowerCase().replace(/ \/ /g, "_").replace(/ /g, "_")}:</div>
              <div className="tags">
                {g.items.map(([name, key], k) => (
                  <span key={k} className={key ? "key" : ""}>
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
