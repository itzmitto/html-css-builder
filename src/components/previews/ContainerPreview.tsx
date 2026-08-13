interface ContainerPreviewProps {
  minHeight?: number;
}

function ContainerPreview({
  minHeight = 300,
}: ContainerPreviewProps) {
  return (
    <div
      className="container-preview"
      style={{
        minHeight: `${minHeight}px`,
        width: "100%",
        boxSizing: "border-box",
        position: "relative",
        display: "flex",
      }}
    >
      <div
        style={{
          width: "100%",
          minHeight: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
        }}
      >
        <span
          style={{
            color: "#64748b",
            fontSize: "14px",
            userSelect: "none",
          }}
        >
          Container
        </span>
      </div>
    </div>
  );
}

export default ContainerPreview;