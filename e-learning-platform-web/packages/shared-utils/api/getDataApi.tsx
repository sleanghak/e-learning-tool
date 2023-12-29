import jsCookie from "js-cookie";

const getDataApi = async (url: string, token_key: string) => {
  const token = jsCookie.get(token_key);
  let data = {};
  if (token) {
    const authorize = JSON.parse(token);
    const res = await fetch(url, {
      headers: {
        "x-access-token": authorize.accessToken,
      },
    });
    // console.log(res);
    data = await res.json();
  }
  return data;
};

export default getDataApi;
