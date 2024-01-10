import { FC } from 'react';
import { fetchPageData } from '@/utils/fetchPageData';
import { Texts, TestimoniesDTO } from './types';
import { Header } from '@/components/header';
import Testimony from '@/components/testimony';
import { CTAButton } from '@/components/cta';
import requestCMS from '@/utils/requestCMS';

export type TestimoniesProps = {};

export const Testimonies: FC<TestimoniesProps> = async ({}) => {
  const pageData = await fetchPageData<Texts>('home');

  const testmonies = await requestCMS<TestimoniesDTO>('testimonies?populate=*');

  const { texts } = pageData;

  return (
    <div className='flex flex-col gap-6 md:gap-12 items-center bg-off-white md:flex-1'>
      <Header
        as='h2'
        size='md'
        color='deepBlue'
        className='text-center px-6 md:px-12 pt-6 md:pt-12'
      >
        {texts.testimonies.title}
      </Header>

      <div className='flex gap-6 md:gap-12 px-6 md:px-12 max-w-[100vw] overflow-x-auto md:max-w-[50vw]'>
        {testmonies?.data.map((testimony) => (
          <Testimony.Root key={testimony.id}>
            <Testimony.Content>
              <Testimony.Text>{testimony.attributes.value}</Testimony.Text>
            </Testimony.Content>

            <Testimony.Author>
              <Testimony.Image
                alt={
                  testimony.attributes.avatar.data.attributes.alternativeText ||
                  ''
                }
                src={testimony.attributes.avatar.data.attributes.url || ''}
              />

              <Testimony.AuthorInformations>
                <Testimony.Name>{testimony.attributes.author}</Testimony.Name>
                <Testimony.Sub>{testimony.attributes.from}</Testimony.Sub>
              </Testimony.AuthorInformations>
            </Testimony.Author>
          </Testimony.Root>
        ))}
      </div>

      <div className='px-6 md:px-12 pb-6 md:pb-12 w-full'>
        <CTAButton buttonType='primary' fluid>
          {texts.testimonies.cta}
        </CTAButton>
      </div>
    </div>
  );
};
