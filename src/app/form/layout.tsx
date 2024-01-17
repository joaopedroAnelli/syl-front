import { FormProvider } from './context';
import { fetchPageData } from '@/utils/fetchPageData';
import { FormTexts } from './types';
import InteractiveArea from './interactive-area';
import { Footer } from '@/sections/Footer';

export default async function FormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await fetchPageData<FormTexts>('Form');

  const textsEntries = Object.entries(data.texts);

  const entriesWithFormRoute = textsEntries.map(([key, value]) => {
    return ['/form/' + key, value];
  });

  const titlesMap = Object.fromEntries(entriesWithFormRoute);

  return (
    <div className='flex flex-col bg-off-white min-h-dvh md:flex md:justify-center md:items-center md:flex-col md:gap-6'>
      <FormProvider>
        <InteractiveArea titlesMap={titlesMap}>{children}</InteractiveArea>
      </FormProvider>
      <Footer />
    </div>
  );
}
