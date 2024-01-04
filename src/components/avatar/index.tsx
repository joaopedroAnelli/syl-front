import { FC } from 'react';
import Image, { ImageProps } from 'next/image';

export const Avatar: FC<ImageProps> = ({
  alt,
  width,
  height,
  className,
  ...props
}) => {
  return (
    <Image
      {...props}
      alt={alt}
      width={width || 80}
      height={height || 80}
      className={`rounded-full ${className}`}
    />
  );
};
