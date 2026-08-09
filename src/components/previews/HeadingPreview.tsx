interface HeadingPreviewProps {
  text?: string;
  fontSize?: number;
}

function HeadingPreview({
  text,
  fontSize,
}: HeadingPreviewProps) {
  return (
    <h1
      className="heading-preview"
      style={{
        fontSize: `${fontSize}px`,
      }}
    >
      {text}
    </h1>
  );
}

export default HeadingPreview;