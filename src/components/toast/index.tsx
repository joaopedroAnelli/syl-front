import * as RadixToast from '@radix-ui/react-toast';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { Dispatch, SetStateAction } from 'react';
import { tv } from 'tailwind-variants';
import { ToastStyle } from './styles';

export type ToastProps = {
  isOpen: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  title: string;
  description: string;
  type: 'error' | 'success' | 'info' | 'warning';
};

export function Toast({
  type,
  isOpen,
  onOpenChange,
  title,
  description,
}: ToastProps) {
  const { rootStyle, titleStyle, closeIconStyle, descriptionStyle } =
    ToastStyle({ type });

  return (
    <RadixToast.Provider swipeDirection='right'>
      <RadixToast.Root
        open={isOpen}
        onOpenChange={onOpenChange}
        className={rootStyle}
      >
        <div>
          <RadixToast.Title>
            <h3 className={titleStyle}>{title}</h3>
          </RadixToast.Title>

          <RadixToast.Description className={descriptionStyle}>
            {description}
          </RadixToast.Description>
        </div>

        <RadixToast.Close aria-label='Close'>
          <span aria-hidden>
            <XMarkIcon className={closeIconStyle} />
          </span>
        </RadixToast.Close>
      </RadixToast.Root>
      <RadixToast.Viewport className='fixed bottom-0 right-0 z-50 flex flex-col p-3' />
    </RadixToast.Provider>
  );
}
