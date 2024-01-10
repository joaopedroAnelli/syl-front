import { validateWebToken } from '@/utils/validateWebToken';
import { revalidateTag } from 'next/cache';

export async function POST(request: Request) {
  const authHeader = request.headers.get('Authorization');

  if (!authHeader || !authHeader.toLowerCase().startsWith('bearer ')) {
    return new Response('Unauthorized', { status: 401 });
  }

  const token = authHeader.split(' ')[1];

  const isValid = await validateWebToken(token);

  if (!isValid) {
    return new Response('Unauthorized', { status: 401 });
  }

  revalidateTag('static-content');

  return new Response('OK');
}
