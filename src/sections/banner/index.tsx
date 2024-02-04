import { Header } from '@/components/header';
import { FC } from 'react';
import { Subtitle } from '@/components/subtitle';
import Image from 'next/image';
import BannerPic from '~/public/images/banner.webp';

export type BannerProps = {};

export const Banner: FC<BannerProps> = async ({}) => {
  return (
    <section className='flex flex-col h-[50vh] relative p-6 md:p-12'>
      <Image
        alt='A pretty view of a land with a sunrise'
        src={BannerPic}
        fill
        sizes='100vw'
        quality={100}
        placeholder='blur'
        style={{ objectFit: 'cover' }}
      />

      <div className='z-10 flex items-center justify-center backdrop-blur rounded-md bg-deep-blue/20 p-6 md:p-12 h-full'>
        <div className='text-center'>
          <Header as='h2' size='md' className='z-10 mb-1'>
            Unlock the True Potential of Your Land
          </Header>

          <Subtitle className='z-10 text-white'>
            Transform Acres into Assets.
          </Subtitle>
        </div>
      </div>
    </section>
  );
};
