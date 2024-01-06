import { FC, PropsWithChildren } from 'react';

export type ContentProps = PropsWithChildren<{}>;

export const Content: FC<ContentProps> = ({ children }) => {
  return (
    <div className='flex flex-col items-center justify-start'>{children}</div>
  );
};
