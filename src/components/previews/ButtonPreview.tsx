interface ButtonPreviewProps {
  text?: string;
  color?: string;
  fontSize?: number;
}

function ButtonPreview({
  text,
  color,
  fontSize,
}: ButtonPreviewProps) {
  return (
    <button
      className="button-preview"
      style={{
        color: color || "#000000",
        fontSize: `${fontSize || 16}px`,
      }}
    >
      {text}
    </button>
  );
}

export default ButtonPreview;