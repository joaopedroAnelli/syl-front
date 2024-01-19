const requestCMS = async <ResponseDTO = any>(
  url: string,
  options?: RequestInit
): Promise<ResponseDTO> => {
  const res = await fetch(`${process.env.CMS_HOST}/api/${url}`, {
    headers: {
      Authorization: `Bearer ${process.env.CMS_API_KEY}`,
    },
    next: {
      tags: ['static-content'],
    },
  });

  if (!res.ok) {
    console.error({ url, options, res });
    throw new Error(res.statusText);
  }

  return res.json();
};

export default requestCMS;
