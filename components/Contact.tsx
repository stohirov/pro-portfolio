import { PROFILE } from "@/lib/data";
import { MailIcon, GithubIcon, LinkedinIcon, DownloadIcon } from "./icons";

export default function Contact() {
  return (
    <section id="contact">
      <div className="eyebrow">Get in touch</div>
      <div className="contact-card">
        <h2>Let&apos;s talk</h2>
        <p>I&apos;m open to Software Engineer roles — remote or hybrid. I usually reply within 24 hours.</p>
        <div className="links">
          <a className="link-chip" href={`mailto:${PROFILE.email}`}>
            <MailIcon /> {PROFILE.email}
          </a>
          <a className="link-chip" href={`https://${PROFILE.github}`} target="_blank" rel="noopener">
            <GithubIcon /> GitHub
          </a>
          <a className="link-chip" href={`https://${PROFILE.linkedin}`} target="_blank" rel="noopener">
            <LinkedinIcon /> LinkedIn
          </a>
          <a className="link-chip" href={`/${PROFILE.resume}`} target="_blank" rel="noopener">
            <DownloadIcon /> Résumé (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
