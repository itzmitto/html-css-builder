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
  const resolvedFontSize = Math.max(
    12,
    Math.min(
      fontSize,
      36
    )
  );

  const resolvedLineHeight =
    Math.max(
      1,
      Math.min(
        lineHeight,
        3
      )
    );

  return (
    <p
      className="paragraph-preview"
      style={{
        width: "100%",
        maxWidth: "760px",
        minWidth: 0,
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
        fontSize: `${resolvedFontSize}px`,
        color,
        fontFamily,
        fontWeight,
        lineHeight: resolvedLineHeight,
        letterSpacing: `${letterSpacing}px`,
        textAlign,
        overflowWrap: "break-word",
        wordBreak: "break-word",
        textWrap: "pretty",
      }}
    >
      {text}
    </p>
  );
}

export default ParagraphPreview;