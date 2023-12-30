import React, { ButtonHTMLAttributes } from 'react';
import { tv } from 'tailwind-variants';

type CTAButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonType?: 'primary' | 'secondary';
};

const button = tv({
  base: 'px-4 py-2 font-bold rounded-md text-lg',
  variants: {
    buttonType: {
      primary: 'bg-deep-blue text-off-white',
      secondary: 'bg-gold text-off-white',
    },
  },
});

const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  buttonType,
  ...props
}) => {
  return (
    <button
      {...props}
      className={button({
        class: props.className,
        buttonType,
      })}
    >
      {children}
    </button>
  );
};

export default CTAButton;
