export type Texts = {
  faq: {
    title: string;
    subtitle: string;
    cta: string;
  };
};

type FrequentQuestionsDTO = {
  data: Array<{
    id: number;
    attributes: {
      question: string;
      answer: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
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
