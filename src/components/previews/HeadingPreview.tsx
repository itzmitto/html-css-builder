interface HeadingPreviewProps {
  text?: string;
  fontSize?: number;
  color?: string;
}

function HeadingPreview({
  text,
  fontSize,
  color,
}: HeadingPreviewProps) {
  return (
    <h1
      className="heading-preview"
      style={{
        fontSize: `${fontSize}px`,
        color: color || "#000000",
      }}
    >
      {text}
    </h1>
  );
}

export default HeadingPreview;