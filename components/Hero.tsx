import { PROFILE } from "@/lib/data";
import { MailIcon, PinIcon, ClockIcon, GithubIcon, LinkedinIcon } from "./icons";

const LEDE_HTML =
  "Senior engineer with <b>3+ years</b> building distributed systems and microservices in <b>Java &amp; Spring</b> — from geospatial driver-matching to billions of records on Oracle and ClickHouse. Active open-source contributor to <b>Spring AI</b> and <b>CatBoost</b>.";

export default function Hero() {
  return (
    <section className="hero">
      <span className="avail">
        <span className="pip" />
        {PROFILE.available}
      </span>
      <h1>{PROFILE.name}</h1>
      <p className="lede" dangerouslySetInnerHTML={{ __html: LEDE_HTML }} />
      <div className="meta">
        <span>
          <PinIcon />
          {PROFILE.location}
        </span>
        <span>
          <ClockIcon />
          {PROFILE.timezone}
        </span>
        <span>
          <MailIcon />
          {PROFILE.email}
        </span>
      </div>
      <div className="links">
        <a className="link-chip" href={`mailto:${PROFILE.email}`}>
          <MailIcon /> Email
        </a>
        <a className="link-chip" href={`https://${PROFILE.github}`} target="_blank" rel="noopener">
          <GithubIcon /> GitHub
        </a>
        <a className="link-chip" href={`https://${PROFILE.linkedin}`} target="_blank" rel="noopener">
          <LinkedinIcon /> LinkedIn
        </a>
      </div>
    </section>
  );
}
