import { tv } from 'tailwind-variants';

export const inputWrapperVariant = tv({
  base: 'flex gap-3 p-3 md:gap-2 md:p-2 rounded-md border border-charcoal-slate-700 font-mono bg-white  focus-within:border-deep-blue ',
  variants: {
    readonly: {
      true: 'bg-gray-100',
      false: '',
    },
    color: {
      default: 'bg-white text-charcoal-grey-500',
    },
    fluid: {
      true: 'w-full',
    },
    invalid: {
      true: 'border-red-500',
    },
  },
  defaultVariants: {
    inputType: 'default',
    fluid: false,
    readonly: false,
    invalid: false,
  },
});

export type InputWrapperVariantProps = {
  inputType?: 'default';
  fluid?: boolean;
  readonly?: boolean;
};

export const inputVariant = tv({
  base: 'flex-1 bg-transparent outline-none',
  variants: {
    color: {
      default: 'text-charcoal-grey-900 ',
    },
  },
  defaultVariants: {
    color: 'default',
  },
});

export type InputVariantProps = {
  color?: 'default';
};

export const labelVariant = tv({
  base: 'text-slate-400',
  variants: {
    invalid: {
      true: 'text-red-500',
    },
  },
  defaultVariants: {
    invalid: false,
  },
});
