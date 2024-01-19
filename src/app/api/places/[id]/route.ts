import { NextRequest } from 'next/server';
import { PlaceDetailsResponse } from '../types';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY;

  const googleResponse = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${id}&key=${googleMapsApiKey}`
  );

  const googleResponseParsed: PlaceDetailsResponse =
    await googleResponse.json();

  if (googleResponseParsed.status !== 'OK') {
    console.error('Google API error when fetching place details');

    return new Response('Google API error', { status: 502 });
  }

  const { result } = googleResponseParsed;

  const addressComponents = result.address_components;

  const streetAddress = addressComponents.find((component) =>
    component.types.includes('route')
  );

  const postalCode = addressComponents.find((component) =>
    component.types.includes('postal_code')
  );

  const state = addressComponents.find((component) =>
    component.types.includes('administrative_area_level_1')
  );

  const city = addressComponents.find(
    (component) =>
      component.types.includes('locality') ||
      component.types.includes('administrative_area_level_2')
  );

  return new Response(
    JSON.stringify({
      streetAddress: streetAddress?.long_name,
      postalCode: postalCode?.long_name,
      state: state?.short_name,
      city: city?.long_name,
    }),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}
