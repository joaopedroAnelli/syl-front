import { Input } from '@/components/input';

export default function Location() {
  return (
    <div className='flex justify-center'>
      <div className='w-full md:w-96 flex flex-col items-center'>
        <Input
          label='Zip Code'
          fluid
          type='text'
          inputMode='numeric'
          className='tracking-widest'
        />
      </div>
    </div>
  );
}
