'use client';

import { useState, useContext, useCallback, useEffect } from 'react';
import { PlaceInput } from '@/components/place-input';
import { Input } from '@/components/input';
import { Place } from '@/components/place-input/types';
import { FormContext } from '../context';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Toast } from '@/components/toast';
import { LoadingSpinner } from '@/components/loading-spinner';

export default function Location() {
  const [isLoading, setIsLoading] = useState(false);

  const [showOtherFields, setShowOtherFields] = useState(false);

  const [places, setPlaces] = useState<Place[]>([]);

  const [placeId, setPlaceId] = useState<string | null>(null);

  const { pageFormRef: formRef, data, setData } = useContext(FormContext);

  const [errorInPlaceInput, setErrorInPlaceInput] = useState(false);

  const onSubmitForm = (data: Record<string, any>) => {
    if (!formRef.current) {
      return;
    }

    try {
      // Remove all previous errors
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        city: Yup.string().required(),
        state: Yup.string().required(),
        zip: Yup.string().optional(),
        address: Yup.string().optional(),
      });

      schema.validateSync(data, {
        abortEarly: false,
      });
    } catch (err) {
      const validationErrors: Record<string, string> = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path || ''] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  };

  const fetchPlaceDetails = useCallback(async () => {
    if (!placeId) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        `/api/places/${encodeURIComponent(placeId)}`
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.status);
      }

      const { streetAddress, postalCode, state, city } = data;

      setData((currentData) => ({
        ...currentData,
        address: streetAddress,
        city,
        state,
        zip: postalCode,
      }));

      setShowOtherFields(true);
    } catch (err) {
      console.error(err);
      setErrorInPlaceInput(true);
    } finally {
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [placeId]);

  useEffect(() => {
    fetchPlaceDetails();
  }, [fetchPlaceDetails]);

  if (isLoading) {
    return (
      <div className='flex-1 flex items-center justify-center'>
        <LoadingSpinner size={24} color='#172556' />
      </div>
    );
  }

  return (
    <div className='flex-1'>
      <Form
        ref={formRef}
        onSubmit={onSubmitForm}
        placeholder={undefined}
        className='w-full'
        initialData={data}
      >
        <div className='flex-1 flex flex-wrap items-center justify-center gap-6'>
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
              <Input name='city' type='text' label='City *' />
              <Input name='state' type='text' label='State *' />
              <Input name='zip' type='text' inputMode='numeric' label='Zip' />
              <Input name='address' type='text' label='Address' />
            </>
          )}
        </div>
      </Form>

      <Toast
        type='info'
        isOpen={errorInPlaceInput}
        onOpenChange={setErrorInPlaceInput}
        title='Error while searching for places'
        description='Something went wrong when searching for places. Please fill the fields manually.'
      />
    </div>
  );
}
