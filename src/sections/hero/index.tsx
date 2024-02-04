import { CTAButton } from '@/components/cta';
import { Header } from '@/components/header';
import { FC } from 'react';
import Navbar from '@/components/navbar';
import { Subtitle } from '@/components/subtitle';
import Image from 'next/image';
import HeroPic from '~/public//images/Hero.png';

export type HeroProps = {};

export const Hero: FC<HeroProps> = async ({}) => {
  return (
    <section className='flex flex-col h-[85vh] relative md:h-[80vh]'>
      <Image
        alt='A sunrise over the plain landscape'
        src={HeroPic}
        fill
        sizes='100vw'
        quality={100}
        placeholder='blur'
        style={{ objectFit: 'cover' }}
      />

      <Navbar />

      <main className='flex flex-col justify-between flex-1 items-center p-6 md:justify-center md:gap-8'>
        <div className='z-10 flex flex-col items-center'>
          <Header as='h1' size='lg' className='z-10 mb-1 md:text-deep-blue'>
            Sell Your Lot
          </Header>
          <Subtitle className='md:text-deep-blue'>
            Turn your unused land into profit!
          </Subtitle>
        </div>

        <CTAButton
          href='/form/location'
          buttonType='secondary'
          className='z-10 md:w-auto'
          fluid
          data-cy='hero-cta'
        >
          Turn Your Lot into Cash Now!
        </CTAButton>
      </main>
    </section>
  );
};
