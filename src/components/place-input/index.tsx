'use client';
import { FC, useState, useCallback, ChangeEvent } from 'react';
import { Input } from '@/components/input';
import { FetchPlacesResponse, Place } from './types';
import { LoadingSpinner } from '@/components/loading-spinner';

export type PlaceInputProps = {
  onFindOptions: (places: Place[]) => void;
  onError: (error: Error) => void;
};

export const PlaceInput: FC<PlaceInputProps> = ({ onFindOptions, onError }) => {
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const fetchPlacesOptions =
    useCallback(async (): Promise<FetchPlacesResponse> => {
      setIsLoading(true);

      const res = await fetch(`/api/places?input=${value}`);

      if (!res.ok) {
        setIsLoading(false);
        return {
          isSuccess: false,
          error: new Error('Something went wrong fetching places options'),
        };
      }

      const data = await res.json();

      setIsLoading(false);

      return {
        isSuccess: true,
        data,
      };
    }, [value]);

  const handleOnChange = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;

    setValue(target.value);

    if (timer) {
      clearTimeout(timer);
    }

    const newTimer = setTimeout(() => {
      fetchPlacesOptions().then((response) => {
        if (response.isSuccess) {
          onFindOptions(response.data);
          return;
        }

        onError(response.error);
      });
    }, 500);

    setTimer(newTimer);
  };

  return (
    <Input
      label='Place'
      placeholder='Tell us where your land is located'
      fluid
      type='text'
      className='relative'
      value={value}
      onChange={handleOnChange}
      readOnly={isLoading}
      iconRight={
        isLoading ? <LoadingSpinner color='#0D1530' size={16} /> : undefined
      }
    />
  );
};
