import { FC, PropsWithChildren } from 'react';

export type SubProps = PropsWithChildren<{}>;

export const Sub: FC<SubProps> = ({ children }) => {
  return <span className='text-gray-400 text-sm'>{children}</span>;
};
