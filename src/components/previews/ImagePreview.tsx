interface ImagePreviewProps {
  imageUrl?: string;
}

function ImagePreview({
  imageUrl,
}: ImagePreviewProps) {
  return (
    <div className="image-preview">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Website image"
          style={{
            width: "100%",
            display: "block",
            borderRadius: "8px",
          }}
        />
      ) : (
        <div className="image-placeholder">
          Image
        </div>
      )}
    </div>
  );
}

export default ImagePreview;