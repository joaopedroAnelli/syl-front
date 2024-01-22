import Image, { ImageProps } from 'next/image';

import { FC } from 'react';

export type CMSImageProps = ImageProps & {};

const CMSImage: FC<ImageProps> = ({ src, alt, ...rest }) => {
  const cmsUri = process.env.CMS_HOST || '';

  const finalSrc = src.toString().startsWith('/') ? `${cmsUri}${src}` : src;

  return <Image src={finalSrc} alt={alt} {...rest} />;
};

export default CMSImage;
