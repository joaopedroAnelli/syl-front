import { FC, PropsWithChildren } from 'react';

export type NameProps = PropsWithChildren<{}>;

export const Name: FC<NameProps> = ({ children }) => {
  return <h6 className='text-gray-500 text-base mx-4 mt-4'>{children}</h6>;
};
