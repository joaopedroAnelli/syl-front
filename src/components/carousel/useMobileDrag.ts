import { useCarousel } from './context';

function useMobileDrag(dragThreshold: number = 0.2) {
  const { showPrev, showNext, setAutoPlay } = useCarousel();

  let dragMinThreshold = 0;
  let dragMaxThreshold = 0;

  const changeItem = (event: React.TouchEvent<HTMLDivElement>) => {
    if (event.type === 'touchstart') {
      const touchStartX = event.touches[0].clientX;

      dragMaxThreshold = touchStartX * (1 + dragThreshold);

      dragMinThreshold = touchStartX * (1 - dragThreshold);

      return;
    }

    if (event.type === 'touchend') {
      const touchEndX = event.changedTouches[0].clientX;

      if (touchEndX > dragMaxThreshold) {
        showPrev();
      } else if (touchEndX < dragMinThreshold) {
        showNext();
      }

      setAutoPlay(false);
    }
  };

  return {
    onTouchStart: changeItem,
    onTouchEnd: changeItem,
  };
}

export default useMobileDrag;
