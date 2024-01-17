import { FC, ComponentProps } from 'react';
import {
  inputVariant,
  inputWrapperVariant,
  InputWrapperVariantProps,
} from '@/styles/input';
export type InputProps = ComponentProps<'input'> &
  InputWrapperVariantProps & {
    label: string;
    iconLeft?: JSX.Element;
    iconRight?: JSX.Element;
  };

export const Input: FC<InputProps> = ({
  label,
  className,
  fluid,
  iconLeft,
  iconRight,
  readOnly,
  ...props
}) => {
  return (
    <div className='flex flex-col w-full gap-3'>
      <span className='text-slate-400'>{label}</span>
      <div
        className={inputWrapperVariant({
          className,
          fluid,
          readonly: readOnly,
        })}
      >
        {iconLeft && <div>{iconLeft}</div>}
        <input
          className={inputVariant({
            className,
          })}
          readOnly={readOnly}
          {...props}
        />
        {iconRight && <div>{iconRight}</div>}
      </div>
    </div>
  );
};
