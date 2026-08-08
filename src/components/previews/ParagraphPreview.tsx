interface ParagraphPreviewProps {
  text?: string;
}

function ParagraphPreview({
  text,
}: ParagraphPreviewProps) {
  return (
    <p className="paragraph-preview">
      {text}
    </p>
  );
}

export default ParagraphPreview;