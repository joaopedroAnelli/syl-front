'use client';

import { FC, PropsWithChildren, useEffect } from 'react';
import { FlowPage } from '@/types/flow';
import { usePathname, useRouter } from 'next/navigation';
import { Button, ButtonProps } from '@/components/button';

type FlowButtonBaseProps = {
  flow: FlowPage[];
  isBack?: boolean;
  onClick?: () => void;
  onValidate?: () => Promise<boolean>;
};

type LinkButtonPropsWithoutHref = ButtonProps;

type FlowButtonProps = PropsWithChildren<
  FlowButtonBaseProps & LinkButtonPropsWithoutHref
>;

export const FlowButton: FC<FlowButtonProps> = ({
  flow,
  isBack = false,
  children,
  onValidate,
  ...props
}) => {
  const pathname = usePathname();

  const { push } = useRouter();

  const index = flow.findIndex((f) => f.route.includes(pathname));

  const next = isBack ? flow[index - 1] : flow[index + 1];

  const handleClick = async () => {
    let isValid = true;

    if (onValidate) {
      isValid = await onValidate();
    }

    if (!isValid) {
      return;
    }

    push(next ? next.route : '/');
  };

  return (
    <Button {...props} onClick={handleClick}>
      {children}
    </Button>
  );
};
