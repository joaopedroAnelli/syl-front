import requestCMS from './requestCMS';

export type Page<TextsSchema = any> = {
  name: string;
  texts: TextsSchema;
  images: {
    data: {
      id: number;
      attributes: {
        name: string;
        url: string;
        alternativeText: string;
      };
    }[];
  };
  rich_texts: {
    data: {
      id: number;
      attributes: {
        key: string;
        value: string;
      };
    }[];
  };
  createdAt: string;
  updatedAt: string;
  locale: string;
};

export type PageDataDTO<TextsSchema = any> = {
  data: {
    id: number;
    attributes: Page<TextsSchema>;
  }[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export const fetchPageData = async <TextsSchema>(
  page: string
): Promise<Page<TextsSchema>> => {
  const res: PageDataDTO<TextsSchema> = await requestCMS(
    'pages?populate=*&filters[name][$eqi]=' + page
  );

  const { data } = res;

  const [value] = data;

  const { attributes } = value;

  return attributes;
};
