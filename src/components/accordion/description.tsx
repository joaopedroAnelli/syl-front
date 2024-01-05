import { PropsWithChildren, FC } from 'react';

export type DescriptionProps = PropsWithChildren<{}>;

export const Description: FC<DescriptionProps> = ({ children }) => {
  return <p className='mx-4 text-off-white'>{children}</p>;
};
