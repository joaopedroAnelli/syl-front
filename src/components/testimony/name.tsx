import { FC, PropsWithChildren } from 'react';

export type NameProps = PropsWithChildren<{}>;

export const Name: FC<NameProps> = ({ children }) => {
  return <h6 className='text-gray-500 text-base'>{children}</h6>;
};
