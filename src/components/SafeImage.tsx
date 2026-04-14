import { useState, type ImgHTMLAttributes } from "react";
import { ImageOff } from "lucide-react";

interface SafeImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallbackLabel?: string;
}

const SafeImage = ({
  src,
  alt,
  className,
  fallbackLabel,
  loading = "lazy",
  onError,
  ...props
}: SafeImageProps) => {
  const [hasError, setHasError] = useState(!src);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt || fallbackLabel || "Image unavailable"}
        className={className}
      >
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-secondary px-4 text-center text-muted-foreground">
          <ImageOff className="h-5 w-5" aria-hidden="true" />
          <span className="text-xs font-medium">{fallbackLabel || alt || "Image unavailable"}</span>
        </div>
      </div>
    );
  }

  return (
    <img
      {...props}
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      onError={(event) => {
        onError?.(event);
        setHasError(true);
      }}
    />
  );
};

export default SafeImage;
