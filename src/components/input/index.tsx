'use client';

import { FC, ComponentProps, useRef, useEffect, useState } from 'react';
import {
  inputVariant,
  inputWrapperVariant,
  InputWrapperVariantProps,
  labelVariant,
} from '@/styles/input';
import { useField } from '@unform/core';

type BaseProps =
  | {
      name: string;
      label: string;
      iconLeft?: JSX.Element;
      iconRight?: JSX.Element;
      onValueFormat?: (value: string) => string;
      onRevertValueFormat?: (value: string) => string;
    }
  | {
      name: string;
      label: string;
      iconLeft?: JSX.Element;
      iconRight?: JSX.Element;
      onValueFormat: (value: string) => string;
      onRevertValueFormat: (value: string) => string;
    };

export type InputProps = ComponentProps<'input'> &
  InputWrapperVariantProps &
  BaseProps;

export const Input: FC<InputProps> = ({
  name,
  label,
  className,
  fluid,
  iconLeft,
  iconRight,
  readOnly,
  onValueFormat,
  onRevertValueFormat,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { registerField, fieldName, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        if (onRevertValueFormat) {
          return onRevertValueFormat(ref.current.value);
        }

        return ref.current.value;
      },
      setValue: (ref, value) => {
        if (onValueFormat) {
          ref.current.value = onValueFormat(value);
          return;
        }

        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = '';
      },
    });
  }, [fieldName, onRevertValueFormat, onValueFormat, registerField]);

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
          onChange={(e) => {
            if (!onValueFormat) {
              return;
            }

            if (!onRevertValueFormat) {
              return;
            }

            if (isNaN(Number(onRevertValueFormat(e.target.value)))) {
              return;
            }

            const lastChar = e.target.value[e.target.value.length - 1];

            if (isNaN(Number(lastChar))) {
              return;
            }

            e.target.value = onValueFormat(onRevertValueFormat(e.target.value));
          }}
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
