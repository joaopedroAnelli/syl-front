import { Dispatch, SetStateAction } from 'react';

export type FormTexts = {
  location: string;
  details: string;
  contact: string;
  nextButton: string;
  backButton: string;
};

export type FormContact = {
  name: string;
  email: string;
  phone?: string;
};

export type FormSchema = {
  address: string;
  city: string;
  state: string;
  zip?: string;
  size: number;
  sizeUnit: string;
  offerPrice: number;
  details?: string;
  contact: FormContact;
};

export type ValidatorResponse =
  | {
      isValid: boolean;
      errorMessage?: string;
    }
  | {
      isValid: false;
      errorMessage: string;
    };

export type FormContext = {
  data: FormSchema;
  setData: Dispatch<SetStateAction<FormSchema>>;
  isNextButtonDisabled: boolean;
  setIsNextButtonDisabled: Dispatch<SetStateAction<boolean>>;
  pageValidatorRef: React.MutableRefObject<() => ValidatorResponse>;
};
