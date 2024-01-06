import { FC, PropsWithChildren } from 'react';

export type AuthorProps = PropsWithChildren<{}>;

export const Author: FC<AuthorProps> = ({ children }) => {
  return <div className='flex'>{children}</div>;
};
