import { FC, PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

const headerStyle = tv({
  base: 'font-serif font-bold',
  variants: {
    size: {
      lg: 'text-5xl md:text-6xl lg:text-7xl tracking-tight',
      md: 'text-3xl md:text-4xl lg:text-5xl tracking-tight',
      sm: 'text-2xl md:text-3xl lg:text-4xl tracking-tight',
      xs: 'text-xl md:text-2xl lg:text-3xl tracking-normal',
    },
    color: {
      deepBlue: 'text-deep-blue',
      gold: 'text-gold',
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
