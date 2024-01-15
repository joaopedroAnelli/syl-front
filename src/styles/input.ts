import { tv } from 'tailwind-variants';

export const inputVariant = tv({
  base: 'p-3 rounded-md border border-charcoal-slate-700 font-mono',
  variants: {
    color: {
      default: 'bg-white text-charcoal-grey-500',
    },
    fluid: {
      true: 'w-full',
    },
  },
  defaultVariants: {
    inputType: 'default',
    fluid: false,
  },
});

export type InputVariantProps = {
  inputType?: 'default';
  fluid?: boolean;
};
