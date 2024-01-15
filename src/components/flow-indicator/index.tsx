'use client';

import { FC } from 'react';
import { usePathname } from 'next/navigation';
import { FlowPage } from '@/types/flow';

export type FlowIndicatorProps = {
  flow: FlowPage[];
};

export const FlowIndicator: FC<FlowIndicatorProps> = ({ flow }) => {
  const pathname = usePathname();

  const index = flow.findIndex((f) => f.route.includes(pathname));

  return (
    <div className='w-full flex justify-center items-center gap-6'>
      {flow.map((page, i) => (
        <div
          key={page.route}
          className={`w-2 h-2 rounded-full ${
            i === index ? 'bg-deep-blue w-3 h-3' : 'bg-gray-200'
          } ${i === flow.length - 1 && i === index ? 'bg-emerald-700' : ''}`}
        />
      ))}
    </div>
  );
};
