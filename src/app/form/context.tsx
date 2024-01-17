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
  pageFormRef: { current: null },
});

export type FormProviderProps = {};

export const FormProvider: FC<PropsWithChildren<FormProviderProps>> = ({
  children,
}) => {
  const [data, setData] = useState(INITIAL_DATA);
  const pageFormRef = useRef(null);

  return (
    <FormContext.Provider
      value={{
        data,
        setData,
        pageFormRef,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
