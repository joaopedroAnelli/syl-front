import { tv } from 'tailwind-variants';
import { FC, PropsWithChildren } from 'react';

export type TextProps = {
  as?: 'p' | 'span';
  className?: string;
};

const style = tv({
  base: 'text-base text-charcoal-grey-500',
});

export const Text: FC<PropsWithChildren<TextProps>> = ({
  as: Component = 'p',
  children,
  className,
}) => {
  return <Component className={style({ className })}>{children}</Component>;
};
