import { FC } from 'react';
import CMSImage, { CMSImageProps } from '../cms-image';

export const Avatar: FC<CMSImageProps> = ({
  alt,
  width,
  height,
  className,
  ...props
}) => {
  return (
    <CMSImage
      {...props}
      alt={alt}
      width={width || 80}
      height={height || 80}
      className={`rounded-full ${className}`}
    />
  );
};
