'use client';
import { useState } from 'react';
import { PlaceInput } from '@/components/place-input';
import { Input } from '@/components/input';

export default function Location() {
  const [showOtherFields, setShowOtherFields] = useState(false);

  return (
    <div className='flex justify-center'>
      <div className='w-full md:w-96 flex flex-col items-center gap-6'>
        {!showOtherFields && (
          <PlaceInput
            onError={(err) => {
              console.error(err);
              setShowOtherFields(true);
            }}
            onFindOptions={(places) => {
              console.log('your place id is', JSON.stringify(places, null, 2));
            }}
          />
        )}
        {showOtherFields && (
          <>
            <Input type='text' label='Address' />
            <Input type='text' label='City' />
            <Input type='text' label='State' />
            <Input type='text' inputMode='numeric' label='Zip' />
          </>
        )}
      </div>
    </div>
  );
}
