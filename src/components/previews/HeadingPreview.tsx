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
  const responsiveFontSize = Math.max(
    20,
    Math.min(
      fontSize,
      72
    )
  );

  return (
    <h1
      className="heading-preview"
      style={{
        width: "100%",
        maxWidth: "100%",
        minWidth: 0,
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
        color,
        fontFamily,
        fontSize: `${responsiveFontSize}px`,
        fontWeight,
        lineHeight,
        letterSpacing: `${letterSpacing}px`,
        textAlign,
        overflowWrap: "break-word",
        wordBreak: "break-word",
        textWrap: "balance",
      }}
    >
      {text}
    </h1>
  );
}

export default HeadingPreview;