import { FC, PropsWithChildren } from 'react';

export type SubProps = PropsWithChildren<{}>;

export const Sub: FC<SubProps> = ({ children }) => {
  return (
    <span className='text-gray-400 text-sm mx-4 mt-1 mb-4'>{children}</span>
  );
};
