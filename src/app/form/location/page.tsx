'use client';
import { useState } from 'react';
import { PlaceInput } from '@/components/place-input';
import { Input } from '@/components/input';
import { Place } from '@/components/place-input/types';

export default function Location() {
  const [showOtherFields, setShowOtherFields] = useState(false);
  const [places, setPlaces] = useState<Place[]>([]);
  const [placeId, setPlaceId] = useState<string | null>(null);

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
              setPlaces(places);
              setPlaceId(null);
            }}
          />
        )}
        {!placeId && places.length > 0 && (
          <div className='flex flex-col w-full font-mono max-h-80 overflow-auto'>
            {places.map((place) => (
              <button
                type='button'
                key={place.placeId}
                onClick={() => {
                  setPlaceId(place.placeId);
                  setShowOtherFields(true);
                }}
                className='bg-white p-6 text-left border-b text-lg'
              >
                {place.description}
              </button>
            ))}
          </div>
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
