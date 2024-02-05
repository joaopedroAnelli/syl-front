'use client';

import { createContext, useState, useRef, FC, PropsWithChildren } from 'react';
import { FormContext as FormContextType, SubmitStatus } from './types';
import { useRouter } from 'next/navigation';
import { Toast } from '@/components/toast';

type CmsResponse = {
  ok: boolean;
  text: () => Promise<string>;
  statusText: string;
};

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

    const cmsResponse = await new Promise<CmsResponse>((resolve) => {
      setTimeout(() => {
        resolve({
          ok: true,
          text: () => Promise.resolve(''),
          statusText: '',
        });
      }, 1000);
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

      <Toast
        type='error'
        isOpen={toastOpen}
        onOpenChange={setToastOpen}
        title='Internal Error'
        description={errorMessage || ''}
      />
    </FormContext.Provider>
  );
};
