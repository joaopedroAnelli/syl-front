'use client';
import { useContext } from 'react';
import { Input } from '@/components/input';
import { FormContext } from '../context';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { TextArea } from '@/components/textarea';
import useCheckLocation from '../hooks/useCheckLocation';

export default function Details() {
  useCheckLocation();

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
            type='text'
            label='Size *'
            onValueFormat={(value) => {
              const newValue = new Intl.NumberFormat('en-US').format(
                Number(value)
              );

              return newValue;
            }}
            onRevertValueFormat={(value) => {
              return value.replace(/[^0-9.-]+/g, '');
            }}
            iconRight={<p className='text-slate-400'>SQFT</p>}
          />
          <Input
            name='offerPrice'
            type='text'
            label='Your Offer*'
            onValueFormat={(value) => {
              return new Intl.NumberFormat('en-US').format(Number(value));
            }}
            onRevertValueFormat={(value) => {
              return value.replace(/[^0-9.-]+/g, '');
            }}
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
