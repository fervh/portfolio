type SectionHeadingHighlightProps = {
  title: string;
  highlight: string;
};

export default function SectionHeadingHighlight({
  title,
  highlight,
}: SectionHeadingHighlightProps) {
  const safeTitle = title.replace(highlight, `@@${highlight}@@`);
  const parts = safeTitle.split("@@");

  return (
    <h2>
      {parts.map((part, index) =>
        part === highlight ? (
          <span key={`${part}-${index}`} className="heading-highlight">
            {part}
          </span>
        ) : (
          <span key={`${part}-${index}`}>{part}</span>
        )
      )}
    </h2>
  );
}
