interface ParagraphPreviewProps {
  text?: string;
  fontSize?: number;
  color?: string;
  fontFamily?: string;
  fontWeight?: number;
  lineHeight?: number;
  letterSpacing?: number;
  textAlign?: "left" | "center" | "right";
}

function ParagraphPreview({
  text = "Paragraph",
  fontSize = 16,
  color = "#000000",
  fontFamily = "Arial",
  fontWeight = 400,
  lineHeight = 1.5,
  letterSpacing = 0,
  textAlign = "left",
}: ParagraphPreviewProps) {
  return (
    <p
      className="paragraph-preview"
      style={{
        width: "100%",
        boxSizing: "border-box",
        fontSize: `${fontSize}px`,
        color,
        fontFamily,
        fontWeight,
        lineHeight,
        letterSpacing: `${letterSpacing}px`,
        textAlign,
      }}
    >
      {text}
    </p>
  );
}

export default ParagraphPreview;