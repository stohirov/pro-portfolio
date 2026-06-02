import { EXPERIENCE } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience">
      <div className="eyebrow">Experience</div>
      {EXPERIENCE.map((j, i) => (
        <div className="job" key={i}>
          <div className="job-head">
            <span className="co">{j.co}</span>
            <span className="role">{j.role}</span>
            {j.now && <span className="badge-now">CURRENT</span>}
            <span className="when">{j.when}</span>
          </div>
          <ul>
            {j.bullets.map((b, k) => (
              <li key={k}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
