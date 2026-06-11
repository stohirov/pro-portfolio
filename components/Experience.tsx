import { EXPERIENCE } from "@/lib/data";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience">
      <SectionHead index="01" title="Experience" note="2022 — PRESENT" />
      <div className="timeline">
        {EXPERIENCE.map((j, i) => (
          <Reveal key={i} delay={i * 60}>
            <article className="job">
              <div className="job-when">
                <span>{j.when}</span>
              </div>
              <div className="job-body">
                <h3 className="job-co">
                  {j.co}
                  <span className="job-role">{j.role}</span>
                </h3>
                <ul>
                  {j.bullets.map((b, k) => (
                    <li key={k}>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
