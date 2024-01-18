import { FormSchema } from '@/app/form/types';
import { NextRequest } from 'next/server';
import requestCMS from '@/utils/requestCMS';
import { CreatePropertyDTO } from './types';

async function getContactByEmail(email: string) {
  const cmrResponse = await requestCMS(
    'contacts?populate=*&filters[email][$eqi]=' + email
  );

  const { data } = cmrResponse;

  if (data.length === 0) {
    return null;
  }

  const [contact] = data;

  return contact.id;
}

async function createContact(contact: FormSchema['contact']) {
  const body = JSON.stringify({ data: contact });
  const cmrResponse = await requestCMS('contacts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  });

  const { data } = cmrResponse;

  return data.id;
}

async function getContactID(contact: FormSchema['contact']) {
  const contactId = await getContactByEmail(contact.email);

  if (contactId) {
    return contactId;
  }

  return createContact(contact);
}

async function createProperty(property: CreatePropertyDTO) {
  const cmrResponse = await requestCMS('properties', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(property),
  });

  const { data } = cmrResponse;

  return data;
}

export async function POST(req: NextRequest) {
  const body: FormSchema = await req.json();

  const contactId = await getContactID(body.contact);

  const dataToSend = {
    data: {
      ...body,
      contact: contactId,
    },
  };

  const propertyCreated = await createProperty(dataToSend);

  return new Response(JSON.stringify(propertyCreated), {
    status: 201,
  });
}
