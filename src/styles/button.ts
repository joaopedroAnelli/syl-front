import { tv } from 'tailwind-variants';

export const buttonVariant = tv({
  base: 'px-6 py-3 font-bold rounded-md',
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

export type ButtonVariantProps = {
  buttonType?: 'default' | 'primary' | 'secondary';
  fluid?: boolean;
};
