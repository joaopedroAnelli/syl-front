import { FC, PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

const headerStyle = tv({
  base: 'font-serif tracking-tight font-bold',
  variants: {
    size: {
      lg: 'text-5xl md:text-6xl lg:text-7xl',
      md: 'text-xl md:text-2xl lg:text-3xl',
    },
    color: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      default: 'text-off-white',
    },
  },
  defaultVariants: {
    size: 'lg',
    color: 'default',
  },
});

export type HeaderProps = PropsWithChildren<
  Parameters<typeof headerStyle>[0] & {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  }
>;

export const Header: FC<HeaderProps> = ({ children, as, ...variants }) => {
  const Tag = as || 'h1';

  return <Tag className={headerStyle(variants)}>{children}</Tag>;
};
