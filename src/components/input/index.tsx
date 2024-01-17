'use client';

import { FC, ComponentProps, useRef, useEffect } from 'react';
import {
  inputVariant,
  inputWrapperVariant,
  InputWrapperVariantProps,
  labelVariant,
} from '@/styles/input';
import { useField } from '@unform/core';
export type InputProps = ComponentProps<'input'> &
  InputWrapperVariantProps & {
    name: string;
    label: string;
    iconLeft?: JSX.Element;
    iconRight?: JSX.Element;
  };

export const Input: FC<InputProps> = ({
  name,
  label,
  className,
  fluid,
  iconLeft,
  iconRight,
  readOnly,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { registerField, fieldName, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = '';
      },
    });
  }, []);

  return (
    <div className='flex flex-col w-full gap-3 md:w-80'>
      <span
        className={labelVariant({
          invalid: !!error,
        })}
      >
        {label}
      </span>
      <div
        className={inputWrapperVariant({
          className,
          fluid,
          readonly: readOnly,
        })}
      >
        {iconLeft && <div>{iconLeft}</div>}
        <input
          ref={inputRef}
          className={inputVariant({
            className,
          })}
          defaultValue={defaultValue}
          readOnly={readOnly}
          {...props}
        />
        {iconRight && <div>{iconRight}</div>}
      </div>
      <div>
        <span className={`text-red-500 text-sm ${!error ? 'invisible' : ''}`}>
          {error || 'No error'}
        </span>
      </div>
    </div>
  );
};
