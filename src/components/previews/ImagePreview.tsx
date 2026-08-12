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
      }}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Website image"
          className="image"
          style={{
            width: "100%",
            height: `${height}px`,
            objectFit: "cover",
            borderRadius: `${borderRadius}px`,
            display: "block",
          }}
        />
      ) : (
        <div
          className="image-placeholder"
          style={{
            width: "100%",
            height: `${height}px`,
            borderRadius: `${borderRadius}px`,
          }}
        >
          <span>Image</span>
        </div>
      )}
    </div>
  );
}

export default ImagePreview;