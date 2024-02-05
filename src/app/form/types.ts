import { FormHandles } from '@unform/core';
import { Dispatch, SetStateAction, MutableRefObject } from 'react';

export type FormTexts = {
  location: string;
  details: string;
  contact: string;
  confirmation: string;
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

export enum SubmitStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type FormContext = {
  data: FormSchema;
  setData: Dispatch<SetStateAction<FormSchema>>;
  pageFormRef: MutableRefObject<FormHandles | null>;
  submitForm: () => Promise<boolean>;
  submitStatus: SubmitStatus;
};
