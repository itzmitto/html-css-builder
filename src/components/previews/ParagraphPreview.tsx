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
  text,
  fontSize,
  color,
  fontFamily,
  fontWeight,
  lineHeight,
  letterSpacing,
  textAlign,
}: ParagraphPreviewProps) {
  return (
    <p
      className="paragraph-preview"
      style={{
        fontSize: `${fontSize || 16}px`,
        color: color || "#000000",
        fontFamily: fontFamily || "Arial",
        fontWeight: fontWeight || 400,
        lineHeight: lineHeight || 1.5,
        letterSpacing: `${letterSpacing || 0}px`,
        textAlign: textAlign || "left",
      }}
    >
      {text}
    </p>
  );
}

export default ParagraphPreview;