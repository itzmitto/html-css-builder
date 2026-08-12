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
  text,
  fontSize,
  color,
  fontFamily,
  fontWeight,
  lineHeight,
  letterSpacing,
  textAlign,
}: HeadingPreviewProps) {
  return (
    <h1
      className="heading-preview"
      style={{
        fontSize: `${fontSize || 32}px`,
        color: color || "#000000",
        fontFamily: fontFamily || "Arial",
        fontWeight: fontWeight || 700,
        lineHeight: lineHeight || 1.2,
        letterSpacing: `${letterSpacing || 0}px`,
        textAlign: textAlign || "left",
      }}
    >
      {text}
    </h1>
  );
}

export default HeadingPreview;