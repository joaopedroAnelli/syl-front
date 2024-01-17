const requestCMS = async <ResponseDTO = any>(
  url: string
): Promise<ResponseDTO> => {
  const res = await fetch(`http://localhost:3000/api/cms/${url}`, {
    credentials: 'same-origin',
  });

  return res.json();
};

export default requestCMS;
