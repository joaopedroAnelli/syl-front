'use client';
import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

export type CarouselContext = {
  autoPlay: boolean;
  setAutoPlay: (autoPlay: boolean) => void;
  active: {
    index: number;
    id: string | number;
  };
  showNext: () => void;
  showPrev: () => void;
  registerItem: (id: string | number) => void;
};

export const CarouselContext = createContext<CarouselContext>({
  autoPlay: false,
  setAutoPlay: () => {},
  active: { index: 0, id: 'first' },
  showNext: () => {},
  showPrev: () => {},
  registerItem: () => {},
});

export type CarouselContextProviderProps = {
  autoPlay?: boolean;
  autoPlayDuration?: number;
};

export const CarouselContextProvider: FC<
  PropsWithChildren<CarouselContextProviderProps>
> = ({ autoPlay: initialAutoPlay, autoPlayDuration = 3000, children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(initialAutoPlay || false);

  const itemsRef = useRef<(string | number)[]>([]);

  const showNext = () => {
    setActiveIndex((prev) => (prev + 1) % itemsRef.current.length);
  };

  const showPrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + itemsRef.current.length) % itemsRef.current.length
    );
  };

  const registerItem = (id: string | number) => {
    if (itemsRef.current.includes(id)) {
      return;
    }

    itemsRef.current.push(id);
  };

  useEffect(() => {
    if (!autoPlay) {
      return;
    }

    const interval = setInterval(() => {
      showNext();
    }, autoPlayDuration);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayDuration]);

  const active = {
    index: activeIndex,
    id: itemsRef.current[activeIndex],
  };

  return (
    <CarouselContext.Provider
      value={{
        autoPlay,
        setAutoPlay,
        active,
        showNext,
        showPrev,
        registerItem,
      }}
    >
      {children}
    </CarouselContext.Provider>
  );
};

export function useCarousel() {
  return useContext(CarouselContext);
}
