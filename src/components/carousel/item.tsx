'use client';
import { FC, PropsWithChildren, useRef, useEffect } from 'react';
import { useCarousel } from './context';
import useMobileDrag from './useMobileDrag';

export type CarouselItemProps = {
  id: string | number;
};

export const CarouselItem: FC<PropsWithChildren<CarouselItemProps>> = ({
  children,
  id,
}) => {
  const { registerItem, active } = useCarousel();

  const draggableProps = useMobileDrag(0.2);

  const containerRef = useRef<HTMLDivElement>(null);

  registerItem(id);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    if (active.id !== id) {
      return;
    }

    containerRef.current.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
    });
  }, [active, id]);

  return (
    <div ref={containerRef} {...draggableProps}>
      {children}
    </div>
  );
};
