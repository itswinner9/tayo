import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  /** Approximate display height in pixels */
  height?: number;
  priority?: boolean;
  /** White mark for dark backgrounds (footer, blue bands) */
  variant?: "color" | "white";
};

/** Cropped transparent logo aspect (latest mark) */
const LOGO_RATIO = 1634 / 371;

export function BrandLogo({
  className = "",
  height = 36,
  priority = false,
  variant = "color",
}: BrandLogoProps) {
  const width = Math.round(height * LOGO_RATIO);

  return (
    <Image
      src={
        variant === "white"
          ? "/images/logo-white-v3.png"
          : "/images/logo-v3.png"
      }
      alt="Tayo"
      width={width}
      height={height}
      priority={priority}
      className={`w-auto ${className}`}
      style={{ height, width: "auto", maxWidth: "100%" }}
    />
  );
}
