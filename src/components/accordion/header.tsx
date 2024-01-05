import { FC, PropsWithChildren } from 'react';

export type HeaderProps = PropsWithChildren<{}>;

export const Header: FC<HeaderProps> = ({ children }) => {
  return <div className='flex items-center justify-between'>{children}</div>;
};
