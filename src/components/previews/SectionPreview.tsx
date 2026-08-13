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
        width: "100%",
        maxWidth: "100%",
        minWidth: 0,
        boxSizing: "border-box",
        backgroundColor,
        color: textColor,
        fontFamily,
        textAlign,
        overflow: "hidden",
      }}
    >
      <h2
        style={{
          color: textColor,
          fontFamily,
          maxWidth: "100%",
          overflowWrap: "break-word",
        }}
      >
        {title}
      </h2>
      <p
        style={{
          color: textColor,
          fontFamily,
          maxWidth: "100%",
          overflowWrap: "break-word",
        }}
      >
        {content}
      </p>
    </section>
  );
}

export default SectionPreview;