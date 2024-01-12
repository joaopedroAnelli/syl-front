import { FC } from 'react';
import { fetchPageData } from '@/utils/fetchPageData';
import { Texts, FrequentQuestionsDTO } from './types';
import requestCMS from '@/utils/requestCMS';
import { Header } from '@/components/header';
import { Subtitle } from '@/components/subtitle';
import Accordion from '@/components/accordion';
import { CTAButton } from '@/components/cta';

export type FAQProps = {};

export const FAQ: FC<FAQProps> = async ({}) => {
  const pageData = await fetchPageData<Texts>('home');

  const questions = await requestCMS<FrequentQuestionsDTO>(
    'frequent-questions'
  );

  const { texts } = pageData;

  return (
    <section className='flex flex-col gap-6 md:gap-12 p-6 md:p-12 bg-deep-blue'>
      <div className='text-center'>
        <Header as='h2' size='md' color='default'>
          {texts.faq.title}
        </Header>
        <Subtitle as='h5' color='slate' size='sm'>
          {texts.faq.subtitle}
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

      <CTAButton type='button' buttonType='default'>
        {texts.faq.cta}
      </CTAButton>
    </section>
  );
};
