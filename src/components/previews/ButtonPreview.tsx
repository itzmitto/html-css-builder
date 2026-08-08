interface ButtonPreviewProps {
  text?: string;
}

function ButtonPreview({
  text,
}: ButtonPreviewProps) {
  return (
    <button className="button-preview">
      {text}
    </button>
  );
}

export default ButtonPreview;