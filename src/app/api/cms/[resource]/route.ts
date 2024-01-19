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

export async function POST(req: NextRequest, context: { params: GetParams }) {
  const { params } = context;

  const { resource } = params;

  const body = await req.json();

  const jsonBody = JSON.stringify(body);

  const res = await fetch(`${process.env.CMS_HOST}/api/${resource}`, {
    method: 'POST',
    body: jsonBody,
    headers: {
      Authorization: `Bearer ${process.env.CMS_API_KEY}`,
      'Content-Type': 'application/json; charset=utf8',
    },
  });

  const cmsResponse = await res.json();

  return new Response(JSON.stringify(cmsResponse));
}
