import { FlowButton } from '@/components/flow-button';
import { FlowPage } from '@/types/flow';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';

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

export default function FormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <div className='flex justify-between p-6 md:p-12'>
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
        >
          Next
          <ChevronRightIcon className='w-5 h-5 ml-2' />
        </FlowButton>
      </div>
    </div>
  );
}
