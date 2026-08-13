interface ImagePreviewProps {
  imageUrl?: string;
  width?: number;
  height?: number;
  borderRadius?: number;
}

function ImagePreview({
  imageUrl,
  width = 100,
  height = 300,
  borderRadius = 8,
}: ImagePreviewProps) {
  const resolvedWidth = Math.max(
    10,
    Math.min(width, 100)
  );

  const resolvedHeight = Math.max(
    50,
    Math.min(height, 1200)
  );

  const resolvedRadius = Math.max(
    0,
    Math.min(borderRadius, 100)
  );

  return (
    <div
      className="image-preview"
      style={{
        width: `${resolvedWidth}%`,
        maxWidth: "100%",
        minWidth: 0,
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      {imageUrl ? (
        <div
          style={{
            width: "100%",
            maxWidth: "100%",
            height: `${resolvedHeight}px`,
            position: "relative",
            overflow: "hidden",
            borderRadius: `${resolvedRadius}px`,
            background: "#f1f5f9",
            boxSizing: "border-box",
          }}
        >
          <img
            src={imageUrl}
            alt="Website image"
            className="image"
            style={{
              width: "100%",
              maxWidth: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
              boxSizing: "border-box",
              transition:
                "transform 0.25s ease",
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background:
                "linear-gradient(to top, rgba(15,23,42,0.25), transparent 35%)",
            }}
          />

          <div
            style={{
              position: "absolute",
              left: "14px",
              bottom: "14px",
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              padding: "7px 10px",
              borderRadius: "8px",
              background:
                "rgba(15,23,42,0.72)",
              color: "#ffffff",
              fontSize: "11px",
              fontWeight: 600,
              lineHeight: 1.2,
              backdropFilter:
                "blur(8px)",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "#a78bfa",
              }}
            />
            Image
          </div>
        </div>
      ) : (
        <div
          className="image-placeholder"
          style={{
            width: "100%",
            maxWidth: "100%",
            height: `${resolvedHeight}px`,
            borderRadius: `${resolvedRadius}px`,
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "10px",
            padding: "30px",
            background:
              "linear-gradient(135deg, #f8fafc, #eef2ff)",
            border:
              "1px dashed #c4b5fd",
            color: "#64748b",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "12px",
              background: "#ffffff",
              border:
                "1px solid #e5e7eb",
              boxShadow:
                "0 6px 18px rgba(15,23,42,0.06)",
              color: "#7c3aed",
              fontSize: "20px",
            }}
          >
            ▧
          </div>

          <strong
            style={{
              color: "#334155",
              fontSize: "14px",
              fontWeight: 700,
            }}
          >
            Image
          </strong>

          <span
            style={{
              maxWidth: "240px",
              color: "#94a3b8",
              fontSize: "12px",
              lineHeight: 1.5,
            }}
          >
            Upload an image from the
            properties panel
          </span>
        </div>
      )}
    </div>
  );
}

export default ImagePreview;