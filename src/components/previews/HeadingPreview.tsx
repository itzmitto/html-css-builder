interface HeadingPreviewProps {
  text?: string;
}

function HeadingPreview({
  text,
}: HeadingPreviewProps) {
  return (
    <h1 className="heading-preview">
      {text}
    </h1>
  );
}

export default HeadingPreview;