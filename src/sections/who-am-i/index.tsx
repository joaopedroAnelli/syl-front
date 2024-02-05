import { FC } from 'react';
import { Avatar } from '@/components/avatar';
import { Header } from '@/components/header';
import { CTAButton } from '@/components/cta';
import { MDXRemote } from 'next-mdx-remote/rsc';
import MePic from '~/public/images/Me.png';
import Image from 'next/image';

export const WhoAmI: FC = async () => {
  const richText = `For over 20 years, he has been engaged in various segments such as **construction**, **agribusiness** and **real estate development**. It has more than **20 million dollars** in projects successfully executed in the United States and Brazil.

  - Extensive experience in the real estate market 
  - Creator of global companies specializing in real estate development 
  - Focus on building homes in the Florida region
  - Great experience in the market of popular and luxury homes. 
  - Expertise in projects for the luxury market, with developments in Bela Collina, Lake Nona and Downtown Orlando`;

  return (
    <>
      {/* Mobile */}
      <section className='flex flex-col gap-6 items-center p-6 bg-deep-blue md:hidden'>
        <Header as='h2' size='md'>
          About Me
        </Header>

        <div className='flex flex-col gap-6 items-center bg-deep-blue rounded-md'>
          <div className='flex flex-col gap-3 items-center'>
            <Avatar
              width={100}
              height={100}
              src={MePic}
              alt="Site owner's picture"
            />
            <Header as='h3' size='xs' className='text-slate-400'>
              John Doe
            </Header>
          </div>
          <div className='mdx-wrapper text-slate-400'>
            <MDXRemote source={richText} />
          </div>
        </div>

        <CTAButton href='/form/location' fluid>
          {richText}
        </CTAButton>
      </section>

      {/* Desktop & Tablets */}
      <section className='hidden md:flex p-6 bg-deep-blue gap-6 lg:gap-12 lg:p-12'>
        <div className='flex flex-col items-end gap-6 flex-[2] lg:gap-12'>
          <Image
            src={MePic}
            alt="Site owner's picture"
            className='rounded-md'
            sizes='50vw'
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: '300px',
            }}
            placeholder='blur'
            height={300}
            width={300}
          />
        </div>

        <div className='flex flex-col items-start flex-[3] justify-between gap-6 lg:gap-12'>
          <Header as='h2' size='md'>
            John Doe
          </Header>

          <div className='mdx-wrapper text-slate-400'>
            <MDXRemote source={richText} />
          </div>

          <CTAButton href='/form/location'>Contact Now</CTAButton>
        </div>
      </section>
    </>
  );
};
