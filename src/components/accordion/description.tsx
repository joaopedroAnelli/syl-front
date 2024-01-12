import { PropsWithChildren, FC } from 'react';

export type DescriptionProps = PropsWithChildren<{}>;

export const Description: FC<DescriptionProps> = ({ children }) => {
  return <p className='text-slate-500'>{children}</p>;
};
