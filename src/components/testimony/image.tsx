import { FC } from 'react';
import { tv } from 'tailwind-variants';
import CMSImage, { CMSImageProps } from '../cms-image';

export type ImageProps = CMSImageProps & {
  className?: string;
  alt: string;
};

const style = tv({
  base: 'rounded-full',
});

export const Image: FC<ImageProps> = ({ className, alt, ...props }) => {
  return (
    <CMSImage
      width={56}
      height={56}
      style={{ width: 56, height: 56, objectFit: 'cover' }}
      alt={alt}
      className={style({ className })}
      {...props}
    />
  );
};
