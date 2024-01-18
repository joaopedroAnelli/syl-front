import { FormSchema } from '@/app/form/types';

export type CreatePropertyDTO = {
  data: Omit<FormSchema, 'contact'> & {
    contact: number;
  };
};
