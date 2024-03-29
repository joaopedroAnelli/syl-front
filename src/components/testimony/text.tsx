import { FC, PropsWithChildren } from 'react';

export type TextProps = PropsWithChildren<{}>;

export const Text: FC<TextProps> = ({ children }) => {
  return <p className='text-gray-500 text-base'>{children}</p>;
};
