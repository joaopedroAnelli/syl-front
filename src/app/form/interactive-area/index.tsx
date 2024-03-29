'use client';

import { useContext } from 'react';
import { FormContext } from '../context';
import { FlowButton } from '@/components/flow-button';
import { FlowPage } from '@/types/flow';
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/outline';
import { FlowTitle } from '@/components/flow-title';
import { FlowIndicator } from '@/components/flow-indicator';
import { usePathname } from 'next/navigation';
import { SubmitStatus } from '../types';
import { LoadingSpinner } from '@/components/loading-spinner';

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
  const {
    pageFormRef,
    setData,
    submitStatus,
    submitForm: submitFinalForm,
  } = useContext(FormContext);

  const pathname = usePathname();

  const isSecondToLastFlow = pathname === FLOW[FLOW.length - 2].route;

  const isLastFlow = pathname === FLOW[FLOW.length - 1].route;

  const submitForm = async () => {
    if (isSecondToLastFlow) {
      const success = await submitFinalForm();
      return success;
    }

    if (!pageFormRef.current) {
      return false;
    }

    pageFormRef.current.submitForm();

    await new Promise((resolve) => setTimeout(resolve, 100));

    const errors = pageFormRef.current.getErrors();

    if (Object.keys(errors).length > 0) {
      return false;
    }

    setData((currentData) => ({
      ...currentData,
      ...pageFormRef.current?.getData(),
    }));

    return true;
  };

  return (
    <div className='flex flex-1 flex-col h-full md:h-auto md:bg-white md:border md:rounded-lg md:shadow-sm md:relative md:max-w-[60dvw]'>
      {!isLastFlow && (
        <FlowTitle
          flow={FLOW}
          textsMap={titlesMap}
          as='h2'
          color='deepBlue'
          size='md'
          className='text-center p-6 md:p-12'
        />
      )}
      <div className='p-6 flex-1 flex'>{children}</div>
      {!isLastFlow && (
        <div className='p-6 bottom-0 left-0 w-full'>
          <div className='text-center p-6'>
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
              onValidate={submitForm}
            >
              {submitStatus === SubmitStatus.LOADING ? (
                <LoadingSpinner size={16} color='white' />
              ) : (
                <>
                  {isSecondToLastFlow ? 'Submit' : 'Next'}
                  {isSecondToLastFlow ? (
                    <PaperAirplaneIcon className='w-5 h-5 ml-2' />
                  ) : (
                    <ChevronRightIcon className='w-5 h-5 ml-2' />
                  )}
                </>
              )}
            </FlowButton>
          </div>
        </div>
      )}
    </div>
  );
}
