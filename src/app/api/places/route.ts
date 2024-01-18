import { NextRequest } from 'next/server';
import { PlacesAutocompleteResponse } from './types';

export async function GET(request: NextRequest, response: Response) {
  const { searchParams } = request.nextUrl;

  const text = searchParams.get('input');

  if (!text) {
    return new Response('Missing text', { status: 422 });
  }

  const googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY;

  const googleResponse = await fetch(
    `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${text}&key=${googleMapsApiKey}&locationbias=circle:5000000@38.772951, -103.283206`
  );

  const googleResponseParsed: PlacesAutocompleteResponse =
    await googleResponse.json();

  if (googleResponseParsed.status !== 'OK') {
    console.error('Google API error', googleResponseParsed.error_message);

    return new Response('Google API error', { status: 502 });
  }

  const results = googleResponseParsed.predictions.map((prediction) => ({
    description: prediction.description,
    placeId: prediction.place_id,
  }));

  return new Response(JSON.stringify(results), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
