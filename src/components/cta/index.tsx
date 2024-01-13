import { FC } from 'react';
import { LinkButton, LinkButtonProps } from '../link-button';

export type CTAButtonProps = LinkButtonProps & {};

export const CTAButton: FC<CTAButtonProps> = ({ children, ...props }) => {
  return <LinkButton {...props}>{children}</LinkButton>;
};
