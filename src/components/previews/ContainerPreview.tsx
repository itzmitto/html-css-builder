interface ContainerPreviewProps {
  minHeight?: number;
}

function ContainerPreview({
  minHeight = 300,
}: ContainerPreviewProps) {
  const resolvedMinHeight = Math.max(
    100,
    Math.min(minHeight, 2000)
  );

  return (
    <div
      className="container-preview"
      style={{
        width: "100%",
        minWidth: 0,
        minHeight: `${resolvedMinHeight}px`,
        boxSizing: "border-box",
        position: "relative",
        display: "flex",
        alignItems: "stretch",
        justifyContent: "stretch",
        overflow: "hidden",
        border: "1px dashed #c4b5fd",
        borderRadius: "12px",
        background:
          "linear-gradient(135deg, rgba(124,58,237,0.035), rgba(99,102,241,0.025))",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "12px",
          left: "12px",
          display: "inline-flex",
          alignItems: "center",
          gap: "7px",
          padding: "6px 9px",
          borderRadius: "8px",
          background: "rgba(255,255,255,0.92)",
          border: "1px solid #e9e5f2",
          color: "#7c3aed",
          fontSize: "11px",
          fontWeight: 700,
          lineHeight: 1.2,
          boxShadow:
            "0 4px 12px rgba(15,23,42,0.05)",
          userSelect: "none",
          zIndex: 2,
        }}
      >
        <span
          style={{
            width: "7px",
            height: "7px",
            borderRadius: "50%",
            background: "#7c3aed",
            flexShrink: 0,
          }}
        />
        Container
      </div>

      <div
        style={{
          width: "100%",
          minWidth: 0,
          minHeight: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
          padding: "70px 24px 24px",
        }}
      >
        <div
          style={{
            width: "100%",
            minHeight: "120px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            border: "1px dashed #ddd6fe",
            borderRadius: "10px",
            background: "rgba(255,255,255,0.58)",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "38px",
                height: "38px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
                background: "#ffffff",
                border:
                  "1px solid #e9e5f2",
                color: "#7c3aed",
                fontSize: "16px",
                boxShadow:
                  "0 4px 12px rgba(15,23,42,0.04)",
              }}
            >
              ▦
            </div>

            <strong
              style={{
                color: "#475569",
                fontSize: "13px",
                fontWeight: 700,
              }}
            >
              Drop components here
            </strong>

            <span
              style={{
                color: "#94a3b8",
                fontSize: "11px",
                lineHeight: 1.5,
              }}
            >
              Add sections, cards,
              text and other elements
            </span>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: "140px",
          height: "140px",
          right: "-65px",
          bottom: "-70px",
          borderRadius: "50%",
          background:
            "rgba(124,58,237,0.04)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

export default ContainerPreview;