'use client';

import { ComponentProps, FC, PropsWithChildren } from 'react';
import { useCarousel } from '../context';
import { tv } from 'tailwind-variants';

const style = tv({
  base: 'absolute top-1/2 left-0 transform -translate-y-1/2',
});

export type PrevTriggerProps = ComponentProps<'button'> & {};

export const PrevTrigger: FC<PropsWithChildren<PrevTriggerProps>> = ({
  children,
  ...props
}) => {
  const { showPrev } = useCarousel();

  return (
    <button
      type='button'
      onClick={showPrev}
      {...props}
      className={style({ className: props.className })}
    >
      {children}
    </button>
  );
};
