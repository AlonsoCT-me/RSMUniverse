export function ImagePlaceholder({
  label,
  backgroundColor,
  aspectRatio,
  variant,
  className = "",
  corner = false,
}: {
  label: string;
  backgroundColor: string;
  aspectRatio?: string;
  variant: "light" | "dark";
  className?: string;
  corner?: boolean;
}) {
  return (
    <div
      className={`image-placeholder image-placeholder--${variant} ${corner ? "image-placeholder--corner" : ""} ${className}`}
      style={{
        backgroundColor,
        ...(aspectRatio ? { aspectRatio } : {}),
      }}
      role="img"
      aria-label={label}
    >
      <span className="image-placeholder__mark" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
          <rect x="3.5" y="4.5" width="17" height="15" rx="0.5" />
          <circle cx="9" cy="10" r="1.5" />
          <path d="m5.5 17 4.25-4 3 2.5 2.5-2 3.25 3.5" />
        </svg>
        <b>{label}</b>
      </span>
    </div>
  );
}
