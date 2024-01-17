import requestCMS from '@/utils/requestCMS';
import { NextRequest } from 'next/server';

type GetParams = {
  resource: string;
};

export async function GET(req: NextRequest, context: { params: GetParams }) {
  const { params } = context;

  const { resource } = params;

  const { search } = req.nextUrl;

  const res = await fetch(`${process.env.CMS_HOST}/api/${resource}${search}`, {
    headers: {
      Authorization: `Bearer ${process.env.CMS_API_KEY}`,
    },
    next: {
      tags: ['static-content'],
    },
  });

  const cmsResponse = await res.json();

  return new Response(JSON.stringify(cmsResponse));
}
