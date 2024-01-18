'use client';

import { createContext, useState, useRef, FC, PropsWithChildren } from 'react';
import { FormContext as FormContextType, SubmitStatus } from './types';
import { useRouter } from 'next/navigation';
import * as Toast from '@radix-ui/react-toast';
import { XMarkIcon } from '@heroicons/react/24/solid';

const INITIAL_DATA = {
  address: '',
  city: '',
  state: '',
  offerPrice: 0,
  size: 0,
  sizeUnit: 'sqft',
  contact: {
    name: '',
    email: '',
  },
};
export const FormContext = createContext<FormContextType>({
  data: INITIAL_DATA,
  setData: () => {},
  pageFormRef: { current: null },
  submitStatus: SubmitStatus.IDLE,
  submitForm: () => Promise.resolve(true),
});

export type FormProviderProps = {};

export const FormProvider: FC<PropsWithChildren<FormProviderProps>> = ({
  children,
}) => {
  const [data, setData] = useState(INITIAL_DATA);
  const pageFormRef = useRef(null);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(
    SubmitStatus.IDLE
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [toastOpen, setToastOpen] = useState(false);

  const router = useRouter();

  const submitForm = async () => {
    setSubmitStatus(SubmitStatus.LOADING);

    const cmsResponse = await fetch('/api/properties', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    if (!cmsResponse.ok) {
      setSubmitStatus(SubmitStatus.ERROR);

      let message = await cmsResponse.text();

      if (!message) {
        message = cmsResponse.statusText;
      }

      setErrorMessage(message);

      setToastOpen(true);
      return false;
    }

    setSubmitStatus(SubmitStatus.SUCCESS);

    router.push('/form/success');

    return true;
  };

  return (
    <FormContext.Provider
      value={{
        data,
        setData,
        pageFormRef,
        submitStatus,
        submitForm,
      }}
    >
      {children}

      <Toast.Provider swipeDirection='right'>
        <Toast.Root
          open={toastOpen}
          onOpenChange={setToastOpen}
          className='ToastRoot bg-red-50 rounded-md p-4 shadow-md flex gap-3'
        >
          <div>
            <Toast.Title>
              <h3 className='text-red-700 font-bold text-lg'>Internal Error</h3>
            </Toast.Title>

            <Toast.Description className='text-red-900'>
              {errorMessage}
            </Toast.Description>
          </div>

          <Toast.Close aria-label='Close'>
            <span aria-hidden>
              <XMarkIcon className='w-5 h-5 absolute top-6 right-6 text-red-900' />
            </span>
          </Toast.Close>
        </Toast.Root>
        <Toast.Viewport className='fixed bottom-0 right-0 z-50 flex flex-col p-3' />
      </Toast.Provider>
    </FormContext.Provider>
  );
};
