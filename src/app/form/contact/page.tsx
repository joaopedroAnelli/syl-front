'use client';
import { useContext } from 'react';
import { Input } from '@/components/input';
import { FormContext } from '../context';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Scope } from '@unform/core';

export default function Contact() {
  const { pageFormRef: formRef, data } = useContext(FormContext);

  const onSubmitForm = (data: Record<string, any>) => {
    if (!formRef.current) {
      return;
    }

    try {
      // Remove all previous errors
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        contact: Yup.object().shape({
          firstName: Yup.string().required(),
          lastName: Yup.string().required(),
          email: Yup.string().email().required(),
          phone: Yup.string().optional(),
        }),
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

  const formatPhoneNumber = (value: string): string => {
    const phoneNumber = value.replace(/[^\d]/g, '');

    if (phoneNumber.length < 4) {
      return phoneNumber;
    }

    if (phoneNumber.length < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }

    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  };

  const revertPhoneNumber = (value: string): string => {
    return value.replace(/[^\d]/g, '');
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
          <Scope path='contact'>
            <Input label='First Name*' name='firstName' />
            <Input label='Last Name*' name='lastName' />
            <Input label='Email*' name='email' type='email' />
            <Input
              label='Phone'
              name='phone'
              type='tel'
              onValueFormat={formatPhoneNumber}
              onRevertValueFormat={revertPhoneNumber}
            />
          </Scope>
        </div>
      </Form>
    </div>
  );
}
