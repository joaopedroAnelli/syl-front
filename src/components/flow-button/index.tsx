'use client';

import { FC, PropsWithChildren } from 'react';
import { FlowPage } from '@/types/flow';
import { usePathname, useRouter } from 'next/navigation';
import { Button, ButtonProps } from '@/components/button';

type FlowButtonBaseProps = {
  flow: FlowPage[];
  isBack?: boolean;
  onClick?: () => void;
};

type LinkButtonPropsWithoutHref = ButtonProps;

type FlowButtonProps = PropsWithChildren<
  FlowButtonBaseProps & LinkButtonPropsWithoutHref
>;

export const FlowButton: FC<FlowButtonProps> = ({
  flow,
  isBack = false,
  children,
  onClick,
  ...props
}) => {
  const pathname = usePathname();

  const { prefetch } = useRouter();

  const index = flow.findIndex((f) => f.route.includes(pathname));

  const next = isBack ? flow[index - 1] : flow[index + 1];

  const handleClick = () => {
    if (onClick) {
      try {
        onClick();
      } catch (error) {
        console.error(error);
        return;
      }
    }

    prefetch(next ? next.route : '/');
  };

  return (
    <Button {...props} onClick={handleClick}>
      {children}
    </Button>
  );
};
