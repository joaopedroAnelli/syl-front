import Image, { ImageProps } from 'next/image';

import { FC } from 'react';

const CMSImage: FC<ImageProps> = ({ src, alt, ...rest }) => {
  const cmsUri = process.env.CMS_HOST || '';

  return <Image src={cmsUri + src} alt={alt} {...rest} />;
};

export default CMSImage;
