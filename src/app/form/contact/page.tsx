'use client';
import { useState, useContext } from 'react';
import { PlaceInput } from '@/components/place-input';
import { Input } from '@/components/input';
import { Place } from '@/components/place-input/types';
import { FormContext } from '../context';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { TextArea } from '@/components/textarea';

export default function Details() {
  const { pageFormRef: formRef, data } = useContext(FormContext);

  const onSubmitForm = (data: Record<string, any>) => {
    if (!formRef.current) {
      return;
    }

    try {
      // Remove all previous errors
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        size: Yup.number().moreThan(0).required(),
        offerPrice: Yup.number().moreThan(0).required(),
      });

      schema.validateSync(data, {
        abortEarly: false,
      });
    } catch (err) {
      const validationErrors: Record<string, string> = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path || ''] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  };

  return (
    <div>
      <Form
        ref={formRef}
        onSubmit={onSubmitForm}
        placeholder={undefined}
        className='w-full'
        initialData={data}
      >
        <div className='w-full flex flex-wrap items-center justify-center gap-6'>
          <Input
            name='size'
            type='number'
            label='Size *'
            iconRight={<p className='text-slate-400'>SQFT</p>}
          />
          <Input
            name='offerPrice'
            type='number'
            label='Your Offer*'
            iconLeft={<p className='text-slate-400'>USD</p>}
          />
          <TextArea
            name='details'
            placeholder='Tell me why should I buy this land'
            label='Details (optional)'
          />
        </div>
      </Form>
    </div>
  );
}
