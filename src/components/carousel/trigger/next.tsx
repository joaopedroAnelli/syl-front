'use client';

import { ComponentProps, FC, PropsWithChildren } from 'react';
import { useCarousel } from '../context';
import { tv } from 'tailwind-variants';

const style = tv({
  base: 'absolute top-1/2 right-0 transform -translate-y-1/2',
});

export type NextTriggerProps = ComponentProps<'button'> & {};

export const NextTrigger: FC<PropsWithChildren<NextTriggerProps>> = ({
  children,
  ...props
}) => {
  const { showNext } = useCarousel();

  return (
    <button
      type='button'
      {...props}
      onClick={showNext}
      className={style({ className: props.className })}
    >
      {children}
    </button>
  );
};
