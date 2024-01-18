'use client';

import { useContext } from 'react';
import { FormContext } from '../context';
import useCheckLocation from '../hooks/useCheckLocation';

export default function Confirmation() {
  useCheckLocation();

  const { data } = useContext(FormContext);

  return (
    <div>
      <p className='text-slate-500'>
        Please review your information before submitting.
      </p>

      <div className='flex flex-col md:flex-row justify-cnter'>
        <div className='w-64'>
          <h2 className='text-slate-900 text-2xl font-bold mt-8'>Property</h2>
          <div className='mt-6'>
            <p className='text-slate-500'>Size</p>
            <p className='text-slate-900'>
              {new Intl.NumberFormat('en-US').format(Number(data.size))} SQFT
            </p>
          </div>
          <div className='mt-6'>
            <p className='text-slate-500'>Offer Price</p>
            <p className='text-slate-900'>
              ${new Intl.NumberFormat('en-US').format(Number(data.offerPrice))}
            </p>
          </div>
        </div>

        <div className='w-64'>
          <h2 className='text-slate-900 text-2xl font-bold mt-8'>Location</h2>
          <div className='mt-6'>
            <p className='text-slate-500'>Address</p>
            <p className='text-slate-900'>{data.address}</p>
          </div>
          <div className='mt-6'>
            <p className='text-slate-500'>City</p>
            <p className='text-slate-900'>{data.city}</p>
          </div>
          <div className='mt-6'>
            <p className='text-slate-500'>State</p>
            <p className='text-slate-900'>{data.state}</p>
          </div>
          <div className='my-6'>
            <p className='text-slate-500'>Zip</p>
            <p className='text-slate-900'>{data.zip}</p>
          </div>
        </div>

        <div className='w-64'>
          <h2 className='text-slate-900 text-2xl font-bold mt-8'>Contact</h2>
          <div className='mt-6'>
            <p className='text-slate-500'>Name</p>
            <p className='text-slate-900'>{data.contact.name}</p>
          </div>
          <div className='mt-6'>
            <p className='text-slate-500'>Email</p>
            <p className='text-slate-900'>{data.contact.email}</p>
          </div>
          <div className='mt-6'>
            <p className='text-slate-500'>Phone</p>
            <p className='text-slate-900'>{data.contact.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
