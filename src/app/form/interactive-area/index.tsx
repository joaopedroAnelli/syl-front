'use client';
import { useContext } from 'react';
import { FormContext } from '../context';
import { FlowButton } from '@/components/flow-button';
import { FlowPage } from '@/types/flow';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';
import { FlowTitle } from '@/components/flow-title';
import { FlowIndicator } from '@/components/flow-indicator';

const FLOW: FlowPage[] = [
  {
    route: '/form/location',
    next: '/form/details',
    prev: '/',
  },
  {
    route: '/form/details',
    next: '/form/contact',
    prev: '/form/location',
  },
  {
    route: '/form/contact',
    next: '/form/confirmation',
    prev: '/form/details',
  },
  {
    route: '/form/confirmation',
    next: '/form/success',
    prev: '/form/contact',
  },
  {
    route: '/form/success',
    next: '/',
    prev: '/form/confirmation',
  },
];

export default function InteractiveArea({
  children,
  titlesMap,
}: {
  children: React.ReactNode;
  titlesMap: Record<string, string>;
}) {
  const { pageValidatorRef, isNextButtonDisabled } = useContext(FormContext);

  const goNextPage = () => {
    const { isValid, errorMessage } = pageValidatorRef.current();

    if (!isValid) {
      throw new Error(errorMessage);
    }
  };

  return (
    <div className='md:w-96 md:bg-white md:border md:rounded-lg md:shadow-md md:relative'>
      <FlowTitle
        flow={FLOW}
        textsMap={titlesMap}
        as='h2'
        color='deepBlue'
        size='md'
        className='text-center p-6 md:p-12'
      />
      <div className='p-6 md:p-12'>{children}</div>
      <div className='p-6 md:p-12 fixed md:relative bottom-0 left-0 w-full'>
        <div className='text-center p-6 md:p-12'>
          <FlowIndicator flow={FLOW} />
        </div>
        <div className='flex justify-between'>
          <FlowButton
            flow={FLOW}
            isBack
            className='flex justify-center items-center'
          >
            <ChevronLeftIcon className='w-5 h-5 mr-2' />
            Back
          </FlowButton>

          <FlowButton
            flow={FLOW}
            buttonType='primary'
            className='flex justify-center items-center'
            disabled={isNextButtonDisabled}
            onClick={goNextPage}
          >
            Next
            <ChevronRightIcon className='w-5 h-5 ml-2' />
          </FlowButton>
        </div>
      </div>
    </div>
  );
}
