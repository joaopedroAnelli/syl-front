import { FC, PropsWithChildren } from 'react';

export type TitleProps = PropsWithChildren<{}>;

export const Title: FC<TitleProps> = ({ children }) => {
  return <span className='mx-4 text-off-white'>{children}</span>;
};
