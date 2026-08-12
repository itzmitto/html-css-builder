interface SectionPreviewProps {
  title?: string;
  content?: string;
  backgroundColor?: string;
  textColor?: string;
  fontFamily?: string;
  textAlign?: "left" | "center" | "right";
}

function SectionPreview({
  title = "Section Title",
  content = "Section content...",
  backgroundColor = "#ffffff",
  textColor = "#000000",
  fontFamily = "Arial",
  textAlign = "left",
}: SectionPreviewProps) {
  return (
    <section
      className="section-preview"
      style={{
        backgroundColor,
        color: textColor,
        fontFamily,
        textAlign,
      }}
    >
      <h2
        style={{
          color: textColor,
          fontFamily,
        }}
      >
        {title}
      </h2>

      <p
        style={{
          color: textColor,
          fontFamily,
        }}
      >
        {content}
      </p>
    </section>
  );
}

export default SectionPreview;