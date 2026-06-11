import { PROFILE } from "@/lib/data";
import { GithubIcon, LinkedinIcon, CodeforcesIcon, LeetCodeIcon, DownloadIcon } from "./icons";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact">
      <SectionHead index="05" title="Contact" note="REPLIES &lt; 24H" />
      <Reveal>
        <h2 className="contact-statement">
          Let&apos;s build something <em>that scales.</em>
        </h2>
        <p className="contact-sub">
          I&apos;m open to Software Engineer roles — remote or hybrid. I usually reply within 24 hours.
        </p>
        <a className="contact-mail" href={`mailto:${PROFILE.email}`}>
          {PROFILE.email}
        </a>
        <div className="links">
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
          <a className="link-chip" href={`/${PROFILE.resume}`} target="_blank" rel="noopener">
            <DownloadIcon /> Résumé (PDF)
          </a>
        </div>
      </Reveal>
    </section>
  );
}
