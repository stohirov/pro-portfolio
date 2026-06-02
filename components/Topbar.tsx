import { PROFILE } from "@/lib/data";
import { DownloadIcon } from "./icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-inner">
        <span className="brand">Sukhrob Tokhirov</span>
        <nav className="nav">
          <a className="navlink" href="#experience">Experience</a>
          <a className="navlink" href="#skills">Skills</a>
          <a className="navlink" href="#opensource">Open Source</a>
          <a className="navlink" href="#contact">Contact</a>
          <a className="resume-btn" href={`/${PROFILE.resume}`} target="_blank" rel="noopener">
            <DownloadIcon /> Résumé
          </a>
        </nav>
      </div>
    </div>
  );
}
