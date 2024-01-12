import { FC, PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

const style = tv({
  base: 'font-bold text-base',
  variants: {
    color: {
      default: 'text-off-white',
      grey: 'text-charcoal-grey-500',
      slate: 'text-slate-500',
    },
    size: {
      default: '',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'default',
  },
});

export type SubtitleProps = PropsWithChildren<
  Parameters<typeof style>[0] & {
    as?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  }
>;

export const Subtitle: FC<SubtitleProps> = ({ children, as, ...variants }) => {
  const Tag = as || 'h2';

  return <Tag className={style(variants)}>{children}</Tag>;
};
