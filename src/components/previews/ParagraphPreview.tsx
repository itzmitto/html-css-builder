interface ParagraphPreviewProps {
  text?: string;
  fontSize?: number;
  color?: string;
}

function ParagraphPreview({
  text,
  fontSize,
  color,
}: ParagraphPreviewProps) {
  return (
    <p
      className="paragraph-preview"
      style={{
        fontSize: `${fontSize || 16}px`,
        color: color || "#000000",
      }}
    >
      {text}
    </p>
  );
}

export default ParagraphPreview;