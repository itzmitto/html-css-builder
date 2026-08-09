interface ButtonPreviewProps {
  text?: string;
  color?: string;
}

function ButtonPreview({
  text,
  color,
}: ButtonPreviewProps) {
  return (
    <button
      className="button-preview"
      style={{
        color: color || "#000000",
      }}
    >
      {text}
    </button>
  );
}

export default ButtonPreview;