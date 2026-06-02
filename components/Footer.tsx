import { PROFILE } from "@/lib/data";

export default function Footer() {
  return (
    <div className="footer">
      <span>© 2026 {PROFILE.name}</span>
      <span className="dot">·</span>
      <span>{PROFILE.location}</span>
      <span className="dot">·</span>
      <span>Built with Next.js</span>
    </div>
  );
}
