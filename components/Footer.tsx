import { PROFILE } from "@/lib/data";

export default function Footer() {
  return (
    <div className="footer">
      <span>© 2026 {PROFILE.name}</span>
      <span>{PROFILE.location}</span>
      <span>uptime: 4+ yrs in production</span>
    </div>
  );
}
