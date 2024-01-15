'use client';

import { FC, PropsWithChildren } from 'react';
import { LinkButton, LinkButtonProps } from '@/components/link-button';
import { FlowPage } from '@/types/flow';
import { usePathname } from 'next/navigation';

type FlowButtonBaseProps = {
  flow: FlowPage[];
  isBack?: boolean;
};

type LinkButtonPropsWithoutHref = Omit<LinkButtonProps, 'href'>;

type FlowButtonProps = PropsWithChildren<
  FlowButtonBaseProps & LinkButtonPropsWithoutHref
>;

export const FlowButton: FC<FlowButtonProps> = ({
  flow,
  isBack = false,
  children,
  ...props
}) => {
  const pathname = usePathname();

  const index = flow.findIndex((f) => f.route.includes(pathname));

  const next = isBack ? flow[index - 1] : flow[index + 1];

  return (
    <LinkButton {...props} href={next ? next.route : '/'}>
      {children}
    </LinkButton>
  );
};
