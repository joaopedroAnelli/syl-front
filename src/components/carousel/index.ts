import { Root } from './root';
import { CarouselItem } from './item';
import { NextTrigger } from './trigger/next';
import { PrevTrigger } from './trigger/prev';

const Carousel = {
  Root,
  Item: CarouselItem,
  Trigger: {
    Next: NextTrigger,
    Prev: PrevTrigger,
  },
};

export default Carousel;
