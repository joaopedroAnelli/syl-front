import { FC } from 'react';
import ImageComponent, { ImageProps as ImageComponentProps } from 'next/image';
import { tv } from 'tailwind-variants';

export type ImageProps = ImageComponentProps & {
  className?: string;
  alt: string;
};

const style = tv({
  base: 'm-4',
});

export const Image: FC<ImageProps> = ({ className, alt, ...props }) => {
  return (
    <div className={style({ className })}>
      <ImageComponent width={56} height={56} alt={alt} {...props} />
    </div>
  );
};
