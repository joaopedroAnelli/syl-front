import { LinkButton } from '@/components/link-button';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function Success() {
  return (
    <div className='flex flex-col justify-center items-center flex-1 gap-3'>
      <CheckCircleIcon className='w-20 h-20 text-emerald-700' />
      <h1 className='text-3xl text-deep-blue font-serif font-bold'>
        Thank You!
      </h1>

      <p className='text-base text-slate-500 text-center font-sans font-normal'>
        Your form has been submitted successfully. I will get back to you soon.
      </p>

      <LinkButton buttonType='default' href='/' className='mt-6'>
        Go back to home
      </LinkButton>
    </div>
  );
}
