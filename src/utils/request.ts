const requestCMS = async (url: string) => {
  const res = await fetch(`${process.env.CMS_HOST}/api/${url}`, {
    headers: {
      Authorization: `Bearer ${process.env.CMS_API_KEY}`,
    },
  });

  return res.json();
};

export default requestCMS;
