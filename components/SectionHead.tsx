export default function SectionHead({
  index,
  title,
  note,
}: {
  index: string;
  title: string;
  note?: string;
}) {
  return (
    <header className="sec-head">
      <span className="sec-ghost" aria-hidden="true">
        {index}
      </span>
      <span className="sec-index">{index} /</span>
      <h2 className="sec-title">{title}</h2>
      <span className="sec-rule" />
      {note && <span className="sec-note">{note}</span>}
    </header>
  );
}
