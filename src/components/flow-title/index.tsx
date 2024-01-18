'use client';
import { FC, PropsWithChildren } from 'react';
import { usePathname } from 'next/navigation';
import { FlowPage } from '@/types/flow';
import { Header, HeaderProps } from '@/components/header';

export type TextsMap = Record<string, string>;

type FlowTitleBaseProps = {
  flow: FlowPage[];
  textsMap: TextsMap;
};

export type FlowTitleProps = PropsWithChildren<
  FlowTitleBaseProps & HeaderProps
>;

export const FlowTitle: FC<FlowTitleProps> = ({
  flow,
  textsMap,
  children,
  ...props
}) => {
  const pathname = usePathname();

  const page = flow.find((f) => f.route.includes(pathname));

  const flowTitle = textsMap[page?.route || '/'];

  return <Header {...props}>{flowTitle || 'Not Found'}</Header>;
};
