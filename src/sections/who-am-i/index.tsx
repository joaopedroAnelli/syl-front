import { FC } from 'react';
import { Avatar } from '@/components/avatar';
import { fetchPageData } from '@/utils/fetchPageData';
import { Header } from '@/components/header';
import { Texts } from './types';
import { CTAButton } from '@/components/cta';
import { MDXRemote } from 'next-mdx-remote/rsc';
import CMSImage from '@/components/cms-image';

const WhoAmI: FC = async () => {
  const pageData = await fetchPageData<Texts>('home');

  const { texts, images, rich_texts } = pageData;

  const avatarImage = images?.data.find(
    (image) => image.attributes.name === 'who-am-i'
  );

  const richText = rich_texts?.data.find(
    (richText) => richText.attributes.key === 'who-am-i'
  );

  return (
    <>
      {/* Mobile */}
      <div className='flex flex-col gap-6 items-center p-6 bg-deep-blue md:hidden'>
        <Header as='h2' size='md'>
          {texts.whoAmI.title}
        </Header>

        <div className='flex flex-col gap-6 items-center p-6 bg-deep-blue rounded-md'>
          <div className='flex flex-col gap-3 items-center'>
            <Avatar
              width={100}
              height={100}
              src={avatarImage?.attributes.url || ''}
              alt={avatarImage?.attributes.alternativeText || ''}
            />
            <Header as='h3' size='xs' className='text-slate-400'>
              {texts.whoAmI.subtitle}
            </Header>
          </div>
          <div className='mdx-wrapper text-slate-400'>
            <MDXRemote source={richText?.attributes.value || ''} />
          </div>
        </div>

        <CTAButton buttonType='secondary' fluid>
          {texts.whoAmI.cta}
        </CTAButton>
      </div>

      {/* Desktop & Tablets */}
      <div className='hidden md:flex p-6 bg-deep-blue gap-6 lg:gap-12 lg:p-12'>
        <div className='flex flex-col items-end gap-6 flex-[2] lg:gap-12'>
          <CMSImage
            src={avatarImage?.attributes.url || ''}
            alt={avatarImage?.attributes.alternativeText || ''}
            className='rounded-md'
            sizes='(max-width: 480px) 90vw, 
              (max-width: 768px) 80vw, 
              (max-width: 1024px) 70vw, 
              (max-width: 1200px) 60vw, 
              50vw'
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: '300px',
            }}
            height={300}
            width={300}
          />
        </div>

        <div className='flex flex-col items-start flex-[3] justify-between gap-6 lg:gap-12'>
          <Header as='h2' size='md'>
            {texts.whoAmI.subtitle}
          </Header>

          <div className='mdx-wrapper text-slate-400'>
            <MDXRemote source={richText?.attributes.value || ''} />
          </div>

          <CTAButton buttonType='secondary'>{texts.whoAmI.cta}</CTAButton>
        </div>
      </div>
    </>
  );
};

export default WhoAmI;
