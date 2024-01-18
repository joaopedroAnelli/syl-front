const requestCMS = async <ResponseDTO = any>(
  url: string,
  options?: RequestInit
): Promise<ResponseDTO> => {
  const res = await fetch(`http://localhost:3000/api/cms/${url}`, {
    ...options,
    credentials: 'same-origin',
  });

  if (!res.ok) {
    console.error({ url, options, res });
    throw new Error(res.statusText);
  }

  return res.json();
};

export default requestCMS;
