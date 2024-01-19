import { tv } from 'tailwind-variants';

export const rootStyle = tv({
  base: 'ToastRoot rounded-md p-4 shadow-md flex gap-3',
  variants: {
    type: {
      error: 'bg-red-50',
      success: 'bg-emerald-50',
      warning: 'bg-yellow-50',
      info: 'bg-blue-50',
    },
  },
});

export const titleStyle = tv({
  base: 'font-bold text-lg',
  variants: {
    type: {
      error: 'text-red-900',
      success: 'text-emerald-900',
      warning: 'text-yellow-900',
      info: 'text-blue-900',
    },
  },
});

export const descriptionStyle = tv({
  variants: {
    type: {
      error: 'text-red-700',
      success: 'text-emerald-700',
      warning: 'text-yellow-700',
      info: 'text-blue-700',
    },
  },
});

export const closeIconStyle = tv({
  base: 'w-5 h-5 absolute top-6 right-6',
  variants: {
    type: {
      error: 'text-red-900',
      success: 'text-emerald-900',
      warning: 'text-yellow-900',
      info: 'text-blue-900',
    },
  },
});

export const ToastStyle = ({
  type,
  className,
}: {
  type: 'error' | 'success' | 'warning' | 'info';
  className?: string;
}) => ({
  rootStyle: rootStyle({ type, className }),
  titleStyle: titleStyle({ type, className }),
  descriptionStyle: descriptionStyle({ type, className }),
  closeIconStyle: closeIconStyle({ type, className }),
});
