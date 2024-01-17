'use client';
import { createContext, useState, useRef, FC, PropsWithChildren } from 'react';
import { FormContext as FormContextType } from './types';

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
  isNextButtonDisabled: false,
  setIsNextButtonDisabled: () => {},
  pageValidatorRef: { current: () => ({ isValid: true }) },
});

export type FormProviderProps = {};

export const FormProvider: FC<PropsWithChildren<FormProviderProps>> = ({
  children,
}) => {
  const [data, setData] = useState(INITIAL_DATA);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);
  const pageValidatorRef = useRef(() => ({ isValid: true }));

  return (
    <FormContext.Provider
      value={{
        data,
        setData,
        isNextButtonDisabled,
        setIsNextButtonDisabled,
        pageValidatorRef,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
