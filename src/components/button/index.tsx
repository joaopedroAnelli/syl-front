import React, { ButtonHTMLAttributes } from 'react';
import { buttonVariant, ButtonVariantProps } from '@/styles/button';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariantProps;

export const Button: React.FC<ButtonProps> = ({
  children,
  buttonType = 'default',
  fluid,
  ...props
}) => {
  return (
    <button
      {...props}
      className={buttonVariant({
        class: props.className,
        buttonType,
        fluid,
      })}
    >
      {children}
    </button>
  );
};
