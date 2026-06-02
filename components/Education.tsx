import { EDUCATION } from "@/lib/data";

export default function Education() {
  return (
    <section id="education">
      <div className="eyebrow">Education</div>
      {EDUCATION.map((e, i) => (
        <div className="edu" key={i}>
          <span className="inst">{e.inst}</span>
          <span className="deg">{e.deg}</span>
          <span className="when">{e.when}</span>
        </div>
      ))}
    </section>
  );
}
