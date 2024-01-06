import { FC, PropsWithChildren } from 'react';

export type RootProps = PropsWithChildren<{}>;

export const Root: FC<RootProps> = ({ children }) => {
  return <div className='flex flex-col bg-white rounded-md'>{children}</div>;
};
