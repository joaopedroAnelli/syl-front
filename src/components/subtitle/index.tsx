import { FC, PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

const style = tv({
  base: 'font-bold text-base',
  variants: {
    color: {
      default: 'text-off-white',
      grey: 'text-charcoal-grey-500',
    },
  },
  defaultVariants: {
    color: 'default',
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
