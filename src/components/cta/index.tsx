import React, { ButtonHTMLAttributes } from 'react';
import { tv } from 'tailwind-variants';

export type CTAButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonType?: 'primary' | 'secondary' | 'default';
  fluid?: boolean;
};

const buttonVariant = tv({
  base: 'px-6 py-3 font-bold rounded-md text-lg',
  variants: {
    buttonType: {
      default: 'bg-off-white text-charcoal-grey-500',
      primary: 'bg-deep-blue text-off-white',
      secondary: 'bg-gold text-deep-blue',
    },
    fluid: {
      true: 'w-full',
    },
  },
  defaultVariants: {
    buttonType: 'default',
    fluid: false,
  },
});

export const CTAButton: React.FC<CTAButtonProps> = ({
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
