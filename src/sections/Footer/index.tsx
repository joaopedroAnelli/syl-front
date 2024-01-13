import { fetchPageData } from '@/utils/fetchPageData';
import { FC } from 'react';
import { Texts } from './types';
import { MDXRemote } from 'next-mdx-remote/rsc';

export type FooterProps = {};

export const Footer: FC<FooterProps> = async ({}) => {
  const pageData = await fetchPageData<Texts>('home');

  const { texts } = pageData;

  const year = new Date().getFullYear();
  return (
    <div className='p-6 md:p-12 flex justify-between bg-deep-blue-600 text-slate-500'>
      <p>{texts.footer.name}</p>

      <p>
        {texts.footer.showCopySign ? '\u00A9 ' : ''}
        {texts.footer.rights}
        {texts.footer.showYearAfterRights ? ' ' + year : ''}
      </p>
    </div>
  );
};
