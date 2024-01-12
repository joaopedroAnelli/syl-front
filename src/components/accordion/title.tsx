import { FC, PropsWithChildren } from 'react';

export type TitleProps = PropsWithChildren<{}>;

export const Title: FC<TitleProps> = ({ children }) => {
  return <span className='text-off-white text-left'>{children}</span>;
};
