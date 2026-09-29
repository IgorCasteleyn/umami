'use client';
import type { CSSProperties, ImgHTMLAttributes } from 'react';

type BrandLogoProps = {
  height?: number;
  className?: string;
  style?: CSSProperties;
  priority?: boolean;
} & Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'height' | 'width'>;

const LIGHT_SRC = '/brand/Logo_licht-nobg.webp';
const DARK_SRC = '/brand/Logo_zwart-nobg.webp';

export function BrandLogo({
  height = 28,
  className,
  style,
  priority = false,
  ...props
}: BrandLogoProps) {
  const sharedStyle: CSSProperties = {
    height,
    width: 'auto',
    objectFit: 'contain',
    objectPosition: 'left center',
    display: 'block',
    ...style,
  };

  return (
    <span
      className={`nomo-brand-logo${className ? ` ${className}` : ''}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        height,
        lineHeight: 0,
      }}
    >
      <img
        src={LIGHT_SRC}
        alt="Nomo IT"
        height={height}
        className="nomo-logo-light"
        style={sharedStyle}
        decoding={priority ? 'sync' : 'async'}
        loading={priority ? 'eager' : 'lazy'}
        {...props}
      />
      <img
        src={DARK_SRC}
        alt="Nomo IT"
        height={height}
        className="nomo-logo-dark"
        style={{ ...sharedStyle, display: 'none' }}
        decoding={priority ? 'sync' : 'async'}
        loading={priority ? 'eager' : 'lazy'}
        {...props}
      />
    </span>
  );
}

export default BrandLogo;
