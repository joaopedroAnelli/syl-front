'use client';

import {
  createContext,
  FC,
  PropsWithChildren,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';

export type AccordionContextType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const AccordionContext = createContext<AccordionContextType>({
  open: false,
  setOpen: () => {},
});

export const AccordionProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <AccordionContext.Provider value={{ open, setOpen }}>
      {children}
    </AccordionContext.Provider>
  );
};
