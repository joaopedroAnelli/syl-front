import { FC, PropsWithChildren } from 'react';
import Link, { LinkProps } from 'next/link';
import { buttonVariant, ButtonVariantProps } from '@/styles/button';

export type LinkButtonProps = PropsWithChildren<LinkProps> & ButtonVariantProps;

export const LinkButton: FC<LinkButtonProps> = ({
  children,
  buttonType = 'default',
  fluid,
  ...props
}) => {
  return (
    <Link
      {...props}
      className={buttonVariant({
        class: props.className,
        buttonType,
        fluid,
      })}
    >
      {children}
    </Link>
  );
};
