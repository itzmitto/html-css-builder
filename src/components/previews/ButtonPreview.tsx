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
  text = "Button",
  color = "#000000",
  fontSize = 16,
  fontFamily = "Arial",
  fontWeight = 400,
  lineHeight = 1.5,
  letterSpacing = 0,
  textAlign = "center",
}: ButtonPreviewProps) {
  return (
    <button
      type="button"
      className="button-preview"
      style={{
        maxWidth: "100%",
        boxSizing: "border-box",
        color,
        fontSize: `${fontSize}px`,
        fontFamily,
        fontWeight,
        lineHeight,
        letterSpacing: `${letterSpacing}px`,
        textAlign,
      }}
    >
      {text}
    </button>
  );
}

export default ButtonPreview;