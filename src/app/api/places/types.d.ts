type GoogleResponseStatus =
  | 'OK'
  | 'ZERO_RESULTS'
  | 'INVALID_REQUEST'
  | 'OVER_QUERY_LIMIT'
  | 'REQUEST_DENIED'
  | 'UNKNOWN_ERROR';

export type PlacesAutocompleteResponse = {
  predictions: {
    description: string;
    place_id: string;
  }[];
  status: GoogleResponseStatus;
  error_message?: string;
};

type PlaceType = 'street_address' | 'postal_code' | 'locality' | 'sublocality';

type AddressComponent = {
  long_name: string;
  short_name: string;
  types: PlaceType[];
};

type Place = {
  address_components: AddressComponent[];
};

export type PlaceDetailsResponse = {
  result: Place;
  status: GoogleResponseStatus;
};
