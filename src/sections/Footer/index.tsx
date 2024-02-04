import { FC } from 'react';

export type FooterProps = {};

export const Footer: FC<FooterProps> = async ({}) => {
  const year = new Date().getFullYear();

  return (
    <div className='p-6 flex justify-between bg-deep-blue-600 text-slate-500 w-full'>
      <p>Sell Your Lot</p>

      <p>
        {'\u00A9 '}
        All rights reserved {year}
      </p>
    </div>
  );
};
