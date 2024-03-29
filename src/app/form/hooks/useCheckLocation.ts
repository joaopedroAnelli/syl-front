'use client';

import { useContext, useEffect } from 'react';
import { FormContext } from '../context';
import { useRouter } from 'next/navigation';

export default function useCheckLocation() {
  const { data } = useContext(FormContext);
  const router = useRouter();

  useEffect(() => {
    if (!data.city) {
      router.push('/form/location');
    }
  }, [data.city, router]);
}
