'use client';

import { useContext, FC, PropsWithChildren } from 'react';
import { AccordionContext } from './context';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

export type IndicatorProps = PropsWithChildren<{}>;

export const Indicator: FC<IndicatorProps> = ({ children }) => {
  const { open } = useContext(AccordionContext);

  return (
    <ChevronDownIcon
      className={`text-off-white h-5 w-5 transition-transform transform ${
        open ? 'rotate-180' : ''
      }`}
    />
  );
};
