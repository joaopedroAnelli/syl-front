import { FC } from 'react';
import { Header } from '@/components/header';
import Testimony from '@/components/testimony';
import { CTAButton } from '@/components/cta';
import Carousel from '@/components/carousel';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Person1Pic from '~/public/images/person1.webp';
import Person2Pic from '~/public/images/person2.webp';
import Person3Pic from '~/public/images/person3.webp';
import Person4Pic from '~/public/images/person4.webp';
import Person5Pic from '~/public/images/person5.webp';

export type TestimoniesProps = {};

export const Testimonies: FC<TestimoniesProps> = async ({}) => {
  const testimonies = [
    {
      id: 1,
      attributes: {
        author: 'John',
        from: 'Florida',
        value:
          "“I never thought selling my land could be so easy! 'Sell Your Lot' handled everything seamlessly, and I got a great offer within weeks.”",
        avatar: {
          data: {
            id: 4,
            attributes: {
              url: Person1Pic,
              alternativeText: 'John from Florida',
            },
          },
        },
      },
    },
    {
      id: 2,
      attributes: {
        author: 'Alicia',
        from: 'Georgia',
        value:
          " \"As a first-time seller, I was nervous, but the team at 'Sell Your Lot' was incredibly supportive. The process was clear, and I'm thrilled with the outcome.\"",
        avatar: {
          data: {
            id: 6,
            attributes: {
              alternativeText: 'Alicia from Georgia',
              url: Person5Pic,
            },
          },
        },
      },
    },
    {
      id: 3,
      attributes: {
        author: 'Ethan',
        from: 'Texas',
        value:
          '"I was sitting on unused land for years. \'Sell Your Lot\' turned it into a profitable venture. Highly recommend their service!"',
        avatar: {
          data: {
            id: 7,
            attributes: {
              alternativeText: 'Ethan from Texas',
              url: Person3Pic,
            },
          },
        },
      },
    },
    {
      id: 4,
      attributes: {
        author: 'Fred',
        from: 'New York',
        value:
          '"The transparency and efficiency of \'Sell Your Lot\' were outstanding. I received multiple offers and sold my land faster than I imagined."',
        avatar: {
          data: {
            id: 8,
            attributes: {
              alternativeText: 'Fred from New York',
              url: Person4Pic,
            },
          },
        },
      },
    },
    {
      id: 5,
      attributes: {
        author: 'Paul',
        from: 'Kansas',
        value:
          '"From listing to closing, everything was handled professionally. \'Sell Your Lot\' made what seemed daunting, very easy and profitable."',
        avatar: {
          data: {
            id: 5,
            attributes: {
              alternativeText: 'Paul from Kansas',
              url: Person2Pic,
            },
          },
        },
      },
    },
  ];

  return (
    <section className='flex flex-col gap-6 md:gap-12 items-center bg-off-white md:flex-1'>
      <Header
        as='h2'
        size='md'
        color='deepBlue'
        className='text-center px-6 md:px-12 pt-6 md:pt-12'
      >
        Real Success Stories from Our Happy Land Sellers
      </Header>

      <Carousel.Root className='flex gap-6 md:gap-12 px-6 md:px-12 max-w-[calc(100dvw-0px)] md:max-w-[calc(100dvw-96px)] overflow-x-hidden'>
        <Carousel.Trigger.Prev className='ml-6 h-6 w-6 hidden md:inline text-deep-blue'>
          <ChevronLeftIcon />
        </Carousel.Trigger.Prev>
        <Carousel.Trigger.Next className='mr-6 h-6 w-6 hidden md:inline text-deep-blue'>
          <ChevronRightIcon />
        </Carousel.Trigger.Next>
        {testimonies.map((testimony) => (
          <Carousel.Item key={testimony.id} id={testimony.id}>
            <Testimony.Root>
              <Testimony.Content>
                <Testimony.Text>{testimony.attributes.value}</Testimony.Text>
              </Testimony.Content>

              <Testimony.Author>
                <Testimony.Image
                  alt={
                    testimony.attributes.avatar.data.attributes.alternativeText
                  }
                  src={testimony.attributes.avatar.data.attributes.url}
                />

                <Testimony.AuthorInformations>
                  <Testimony.Name>{testimony.attributes.author}</Testimony.Name>
                  <Testimony.Sub>{testimony.attributes.from}</Testimony.Sub>
                </Testimony.AuthorInformations>
              </Testimony.Author>
            </Testimony.Root>
          </Carousel.Item>
        ))}
      </Carousel.Root>

      <div className='px-6 md:px-12 pb-6 md:pb-12 w-full md:w-auto'>
        <CTAButton href='/form/location' buttonType='primary' fluid>
          Turn Land into Profit
        </CTAButton>
      </div>
    </section>
  );
};
