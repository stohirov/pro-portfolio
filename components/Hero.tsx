import { PROFILE } from "@/lib/data";
import { MailIcon, GithubIcon, LinkedinIcon, CodeforcesIcon, LeetCodeIcon } from "./icons";
import FlowField from "./FlowField";

const LEDE_HTML =
  "Senior engineer with <b>4+ years</b> building distributed systems and microservices in <b>Java &amp; Spring</b> — from geospatial driver-matching to billions of records on Oracle and ClickHouse. Active open-source contributor to <b>Spring AI</b> and <b>CatBoost</b>.";

export default function Hero() {
  return (
    <section className="hero">
      <FlowField />
      <div className="hero-inner">
        <p className="hero-eyebrow">
          <span className="slash">//</span> {PROFILE.role} — {PROFILE.location}
        </p>
        <h1>
          Sukhrob
          <em>Tokhirov</em>
        </h1>
        <p className="lede" dangerouslySetInnerHTML={{ __html: LEDE_HTML }} />
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
          <a className="link-chip" href={`https://${PROFILE.codeforces}`} target="_blank" rel="noopener">
            <CodeforcesIcon /> Codeforces
          </a>
          <a className="link-chip" href={`https://${PROFILE.leetcode}`} target="_blank" rel="noopener">
            <LeetCodeIcon /> LeetCode
          </a>
        </div>
        <div className="statline">
          <span><b>4+</b> yrs in production</span>
          <span><b>400K+</b> monthly users</span>
          <span><b>40+</b> services on EKS</span>
          <span><b>3K</b> req/s @ p99 &lt;500ms</span>
        </div>
      </div>
    </section>
  );
}
