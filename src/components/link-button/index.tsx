import { FC, PropsWithChildren } from 'react';
import Link, { LinkProps } from 'next/link';
import { buttonVariant, ButtonVariantProps } from '@/styles/button';

type BaseProps = {
  className?: string;
};

export type LinkButtonProps = PropsWithChildren<
  LinkProps & ButtonVariantProps & BaseProps
>;

export const LinkButton: FC<LinkButtonProps> = ({
  children,
  buttonType = 'default',
  fluid,
  className,
  ...props
}) => {
  return (
    <Link
      {...props}
      className={buttonVariant({
        className,
        buttonType,
        fluid,
      })}
    >
      {children}
    </Link>
  );
};
