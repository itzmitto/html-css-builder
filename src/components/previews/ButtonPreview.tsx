interface ButtonPreviewProps {
  text?: string;
  color?: string;
  fontSize?: number;
  fontFamily?: string;
  fontWeight?: number;
  lineHeight?: number;
  letterSpacing?: number;
  textAlign?: "left" | "center" | "right";
}

function ButtonPreview({
  text,
  color,
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  letterSpacing,
  textAlign,
}: ButtonPreviewProps) {
  return (
    <button
      className="button-preview"
      style={{
        color: color || "#000000",
        fontSize: `${fontSize || 16}px`,
        fontFamily: fontFamily || "Arial",
        fontWeight: fontWeight || 400,
        lineHeight: lineHeight || 1.5,
        letterSpacing: `${letterSpacing || 0}px`,
        textAlign: textAlign || "center",
      }}
    >
      {text}
    </button>
  );
}

export default ButtonPreview;