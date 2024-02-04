import { FC } from 'react';
import { tv } from 'tailwind-variants';
import Image, { ImageProps } from 'next/image';

export type TestimonyImageProps = ImageProps & {
  className?: string;
  alt: string;
};

const style = tv({
  base: 'rounded-full',
});

export const TestimonyImage: FC<TestimonyImageProps> = ({
  className,
  alt,
  ...props
}) => {
  return (
    <Image
      width={56}
      height={56}
      style={{ width: 56, height: 56, objectFit: 'cover' }}
      alt={alt}
      className={style({ className })}
      {...props}
    />
  );
};
