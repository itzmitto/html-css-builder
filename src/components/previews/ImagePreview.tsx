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
          className="image"
        />
      ) : (
        <div className="image-placeholder">
          <span>Image</span>
        </div>
      )}
    </div>
  );
}

export default ImagePreview;