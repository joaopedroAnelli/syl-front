import { Banner } from '@/sections/banner';
import { Hero } from '@/sections/hero';
import { Testimonies } from '@/sections/testmonies';
import { WhoAmI } from '@/sections/who-am-i';

export default function Home() {
  return (
    <div className='flex flex-col h-full'>
      <Hero />
      <WhoAmI />
      <div className='flex flex-wrap'>
        <Banner />
        <Testimonies />
      </div>
    </div>
  );
}
