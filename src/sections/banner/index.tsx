import { Header } from '@/components/header';
import { FC } from 'react';
import CMSImage from '@/components/cms-image';
import { Subtitle } from '@/components/subtitle';
import { fetchPageData } from '@/utils/fetchPageData';
import { Texts } from './types';

export type BannerProps = {};

export const Banner: FC<BannerProps> = async ({}) => {
  const pageData = await fetchPageData<Texts>('home');

  const { texts, images } = pageData;

  const bannerImage = images?.data.find(
    (image) => image.attributes.name === 'banner'
  );

  return (
    <section className='flex flex-col h-[50dvh] relative p-6 md:p-12'>
      {bannerImage && (
        <CMSImage
          alt={bannerImage.attributes.alternativeText}
          src={bannerImage.attributes.url}
          fill
          style={{ objectFit: 'cover', position: 'absolute' }}
        />
      )}

      <div className='z-10 flex items-center justify-center backdrop-blur rounded-md bg-deep-blue/20 p-6 md:p-12 h-full'>
        <div className='text-center'>
          <Header as='h2' size='md' className='z-10 mb-1'>
            {texts.banner.title}
          </Header>

          <Subtitle className='z-10 text-white'>
            {texts.banner.subtitle}
          </Subtitle>
        </div>
      </div>
    </section>
  );
};
