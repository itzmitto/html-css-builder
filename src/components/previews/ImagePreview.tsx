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
  return (
    <div
      className="image-preview"
      style={{
        width: `${width}%`,
        maxWidth: "100%",
        minWidth: 0,
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Website image"
          className="image"
          style={{
            width: "100%",
            maxWidth: "100%",
            height: `${height}px`,
            objectFit: "cover",
            borderRadius: `${borderRadius}px`,
            display: "block",
            boxSizing: "border-box",
          }}
        />
      ) : (
        <div
          className="image-placeholder"
          style={{
            width: "100%",
            maxWidth: "100%",
            height: `${height}px`,
            borderRadius: `${borderRadius}px`,
            boxSizing: "border-box",
          }}
        >
          <span>Image</span>
        </div>
      )}
    </div>
  );
}

export default ImagePreview;