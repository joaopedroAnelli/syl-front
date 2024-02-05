import { FormProvider } from './context';
import { FormTexts } from './types';
import InteractiveArea from './interactive-area';
import { Footer } from '@/sections/Footer';

export default async function FormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const texts: FormTexts = {
    location: 'Property Location',
    details: 'Offer Details',
    contact: 'Contact Information',
    confirmation: 'Confirmation',
  };

  const textsEntries = Object.entries(texts);

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
