import { FC, ComponentProps } from 'react';
import { inputVariant, InputVariantProps } from '@/styles/input';
export type InputProps = ComponentProps<'input'> &
  InputVariantProps & {
    label: string;
  };

export const Input: FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className='flex flex-col w-full gap-3'>
      <span className='text-slate-400'>{label}</span>
      <input
        {...props}
        className={inputVariant({
          className: props.className,
          fluid: props.fluid,
        })}
      />
    </div>
  );
};
