import { ComponentProps, FC, PropsWithChildren } from 'react';

import { CarouselContextProvider } from './context';

export type CarouselProps = ComponentProps<'div'> & {
  autoPlay?: boolean;
  autoPlayDuration?: number;
};

export const Root: FC<PropsWithChildren<CarouselProps>> = ({
  autoPlay,
  autoPlayDuration,
  children,
  ...props
}) => {
  return (
    <CarouselContextProvider
      autoPlay={autoPlay}
      autoPlayDuration={autoPlayDuration}
    >
      <div className='relative'>
        <div {...props}>{children}</div>
      </div>
    </CarouselContextProvider>
  );
};
