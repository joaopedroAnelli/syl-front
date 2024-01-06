import { CTAButton } from '@/components/cta';
import { Header } from '@/components/header';
import { FC } from 'react';
import CMSImage from '@/components/cms-image';
import HeroBody from '@/components/hero-body';
import Navbar from '@/components/navbar';
import { Subtitle } from '@/components/subtitle';
import { fetchPageData } from '@/utils/fetchPageData';
import { Texts } from './types';

export type HeroProps = {};

export const Hero: FC<HeroProps> = async ({}) => {
  const pageData = await fetchPageData<Texts>('home');

  const { texts, images } = pageData;

  const heroImage = images?.data.find(
    (image) => image.attributes.name === 'hero'
  );

  const heroImageUrl = heroImage?.attributes.url;
  return (
    <main className='flex flex-col h-[90%] relative'>
      {heroImageUrl && (
        <CMSImage
          alt='hero image'
          src={heroImageUrl}
          fill
          style={{ objectFit: 'cover', position: 'absolute' }}
        />
      )}

      <Navbar />

      <HeroBody>
        <div className='z-10 flex flex-col items-center'>
          <Header as='h1' size='lg' className='z-10 mb-1 md:text-deep-blue'>
            {texts.hero.title}
          </Header>
          <Subtitle className='md:text-deep-blue'>
            {texts.hero.subtitle}
          </Subtitle>
        </div>

        <CTAButton buttonType='secondary' className='z-10 w-full md:w-auto'>
          {texts.hero.cta}
        </CTAButton>
      </HeroBody>
    </main>
  );
};
