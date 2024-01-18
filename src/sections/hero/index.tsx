import { CTAButton } from '@/components/cta';
import { Header } from '@/components/header';
import { FC } from 'react';
import CMSImage from '@/components/cms-image';
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

  return (
    <section className='flex flex-col h-[85vh] relative md:h-[80vh]'>
      {heroImage && (
        <CMSImage
          alt={heroImage.attributes.alternativeText}
          src={heroImage.attributes.url}
          fill
          style={{ objectFit: 'cover', position: 'absolute' }}
        />
      )}

      <Navbar />

      <main className='flex flex-col justify-between flex-1 items-center p-6 md:justify-center md:gap-8'>
        <div className='z-10 flex flex-col items-center'>
          <Header as='h1' size='lg' className='z-10 mb-1 md:text-deep-blue'>
            {texts.hero.title}
          </Header>
          <Subtitle className='md:text-deep-blue'>
            {texts.hero.subtitle}
          </Subtitle>
        </div>

        <CTAButton
          href='/form/location'
          buttonType='secondary'
          className='z-10 md:w-auto'
          fluid
        >
          {texts.hero.cta}
        </CTAButton>
      </main>
    </section>
  );
};
