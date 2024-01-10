export type Texts = {
  testimonies: {
    title: string;
    cta: string;
  };
};

type TestimoniesDTO = {
  data: Array<{
    id: number;
    attributes: {
      author: string;
      from: string;
      value: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      avatar: {
        data: {
          id: number;
          attributes: {
            name: string;
            alternativeText: string | null;
            url: string;
            previewUrl: string | null;
          };
        };
      };
    };
  }>;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};
