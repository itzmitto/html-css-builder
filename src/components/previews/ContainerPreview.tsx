interface ContainerPreviewProps {
  minHeight?: number;
}

function ContainerPreview({
  minHeight,
}: ContainerPreviewProps) {
  return (
    <div
      className="container-preview"
      style={{
        minHeight: `${minHeight || 300}px`,
      }}
    >
      Container
    </div>
  );
}

export default ContainerPreview;