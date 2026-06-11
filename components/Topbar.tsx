import { PROFILE } from "@/lib/data";
import { DownloadIcon } from "./icons";
import Clock from "./Clock";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-inner">
        <a className="brand" href="#">
          sukhrob<span className="tld">.codes</span>
        </a>
        <Clock />
        <nav className="nav">
          <a className="navlink" href="#experience"><i>01</i>Experience</a>
          <a className="navlink" href="#skills"><i>02</i>Stack</a>
          <a className="navlink" href="#opensource"><i>03</i>Open Source</a>
          <a className="navlink" href="#contact"><i>05</i>Contact</a>
          <a className="resume-btn" href={`/${PROFILE.resume}`} target="_blank" rel="noopener">
            <DownloadIcon /> résumé
          </a>
        </nav>
      </div>
    </div>
  );
}
