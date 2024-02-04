import { FC } from 'react';
import { Header } from '@/components/header';
import { Subtitle } from '@/components/subtitle';
import Accordion from '@/components/accordion';
import { CTAButton } from '@/components/cta';

export type FAQProps = {};

export const FAQ: FC<FAQProps> = async ({}) => {
  const questions = {
    data: [
      {
        id: 1,
        attributes: {
          question: 'How do I list my property on the site?',
          answer:
            "Listing your property is a breeze. Simply click on the 'List Your Property' button, fill in the details about your land, upload any photos if you have them, and submit. We'll guide you through each step.",
        },
      },
      {
        id: 2,
        attributes: {
          question: 'Are there any fees for listing my property?',
          answer:
            'No, listing your property is completely free. We believe in transparent processes, so there are no hidden costs for listing your land with us.',
        },
      },
      {
        id: 3,
        attributes: {
          question: 'How is the selling price for my property determined?',
          answer:
            'The selling price is determined by a combination of market trends, land location, size, and any additional features it may have. We offer tools and resources to help you understand the value of your land.',
        },
      },
      {
        id: 4,
        attributes: {
          question: 'What types of land can I sell?',
          answer:
            "Our platform welcomes a variety of land types including residential lots, farmland, ranches, and more. If you're unsure whether your land qualifies, please contact us.",
        },
      },
      {
        id: 5,
        attributes: {
          question: 'How long does it typically take to sell my land?',
          answer:
            'The time it takes to sell can vary based on market conditions and the specifics of your land. However, our platform is designed to connect you with interested buyers quickly.',
        },
      },
      {
        id: 6,
        attributes: {
          question: 'Can I list multiple properties?',
          answer:
            'Absolutely! You can list as many properties as you own. Our platform can handle multiple listings under a single account for your convenience.',
        },
      },
    ],
  };

  return (
    <section className='flex flex-col gap-6 md:gap-12 p-6 md:p-12 bg-deep-blue'>
      <div className='text-center'>
        <Header as='h2' size='md' color='default'>
          Frequent Asked Questions
        </Header>
        <Subtitle as='h5' color='slate' size='sm'>
          Answers at Your Fingertips: Everything You Need to Know Before You
          Sell
        </Subtitle>
      </div>
      <div>
        {questions.data.map((question) => (
          <Accordion.Root key={question.id}>
            <Accordion.Header>
              <Accordion.Title>{question.attributes.question}</Accordion.Title>
              <Accordion.Indicator />
            </Accordion.Header>

            <Accordion.Body>
              <Accordion.Description>
                {question.attributes.answer}
              </Accordion.Description>
            </Accordion.Body>
          </Accordion.Root>
        ))}
      </div>

      <div className='text-center'>
        <CTAButton
          href='/form/location'
          buttonType='default'
          className='w-full md:w-auto md:inline'
        >
          Sell With Ease
        </CTAButton>
      </div>
    </section>
  );
};
