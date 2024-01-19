const requestCMS = async <ResponseDTO = any>(
  url: string,
  options?: RequestInit
): Promise<ResponseDTO> => {
  const res = await fetch(`${process.env.CMS_HOST}/api/${url}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${process.env.CMS_API_KEY}`,
      ...options?.headers,
    },
    next: {
      tags: ['static-content', ...(options?.next?.tags ?? [])],
    },
  });

  if (!res.ok) {
    console.error({ url, options, res });
    throw new Error(res.statusText);
  }

  return res.json();
};

export default requestCMS;
