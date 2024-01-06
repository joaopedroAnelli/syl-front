import { FC, PropsWithChildren } from 'react';

const HeroBody: FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren<{}>) => {
  return (
    <main className='flex flex-col justify-between flex-1 items-center p-4 md:justify-center md:gap-8'>
      {children}
    </main>
  );
};

export default HeroBody;
