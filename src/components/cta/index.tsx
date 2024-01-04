import React, { ButtonHTMLAttributes } from 'react';
import { tv } from 'tailwind-variants';

export type CTAButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonType?: 'primary' | 'secondary';
  fluid?: boolean;
};

const buttonVariant = tv({
  base: 'px-4 py-2 font-bold rounded-md text-lg',
  variants: {
    buttonType: {
      default: 'bg-off-white text-charcoal-grey-500',
      primary: 'bg-deep-blue text-off-white',
      secondary: 'bg-gold text-off-white',
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
  buttonType,
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
