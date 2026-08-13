interface HeadingPreviewProps {
  text?: string;
  fontSize?: number;
  color?: string;
  fontFamily?: string;
  fontWeight?: number;
  lineHeight?: number;
  letterSpacing?: number;
  textAlign?: "left" | "center" | "right";
}

function HeadingPreview({
  text = "Heading",
  fontSize = 32,
  color = "#000000",
  fontFamily = "Arial",
  fontWeight = 700,
  lineHeight = 1.2,
  letterSpacing = 0,
  textAlign = "left",
}: HeadingPreviewProps) {
  return (
    <h1
      className="heading-preview"
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
    </h1>
  );
}

export default HeadingPreview;