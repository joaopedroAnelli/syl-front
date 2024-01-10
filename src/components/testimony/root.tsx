import { FC, PropsWithChildren } from 'react';

export type RootProps = PropsWithChildren<{}>;

export const Root: FC<RootProps> = ({ children }) => {
  return (
    <div className='flex flex-col justify-between bg-white rounded-md p-6 md:p-12 gap-6 md:gap-12 min-w-72'>
      {children}
    </div>
  );
};
