'use client';

import { createContext, FC, PropsWithChildren, useState } from 'react';

export type AccordionContextType = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const AccordionContext = createContext<AccordionContextType>({
  open: false,
  setOpen: () => {},
});

export const AccordionProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const changeOpen = (open: boolean) => {
    setOpen(open);
  };

  return (
    <AccordionContext.Provider value={{ open, setOpen: changeOpen }}>
      {children}
    </AccordionContext.Provider>
  );
};
