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
        width: "100%",
        boxSizing: "border-box",
        display: "flex",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          minHeight: "100%",
        }}
      >
        Container
      </div>
    </div>
  );
}

export default ContainerPreview;