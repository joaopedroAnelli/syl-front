export type PlacesAutocompleteResponse = {
  predictions: {
    description: string;
    place_id: string;
  }[];
  status:
    | 'OK'
    | 'ZERO_RESULTS'
    | 'INVALID_REQUEST'
    | 'OVER_QUERY_LIMIT'
    | 'REQUEST_DENIED'
    | 'UNKNOWN_ERROR';
  error_message?: string;
};
