export type Place = {
  description: string;
  placeId: string;
};

export type FetchPlacesResponse =
  | {
      isSuccess: false;
      error: Error;
      data?: undefined;
    }
  | {
      isSuccess: true;
      data: Place[];
      error?: undefined;
    };
