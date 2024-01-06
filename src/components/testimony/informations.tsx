import { FC, PropsWithChildren } from 'react';

export type InformationsProps = PropsWithChildren<{}>;

export const Informations: FC<InformationsProps> = ({ children }) => {
  return (
    <div className='flex flex-col items-center justify-start'>{children}</div>
  );
};
