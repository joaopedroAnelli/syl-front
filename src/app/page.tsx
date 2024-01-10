import { Hero } from '@/sections/hero';
import WhoAmI from '@/sections/who-am-i';

export default function Home() {
  return (
    <div className='flex flex-col h-full'>
      <Hero />
      <WhoAmI />
    </div>
  );
}
