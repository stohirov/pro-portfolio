import { EDUCATION } from "@/lib/data";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education">
      <SectionHead index="04" title="Education" />
      <Reveal>
        {EDUCATION.map((e, i) => (
          <div className="edu" key={i}>
            <span className="inst">{e.inst}</span>
            <span className="deg">{e.deg}</span>
            <span className="when">{e.when}</span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
