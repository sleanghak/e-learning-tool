import jsCookie from "js-cookie";

/**
 *
 * @param {*} url :string
 * @param {*} body :Object
 * @returns
 */
const updateDataApi = async (url: string, token_key: string, body: any) => {
  const token = jsCookie.get(token_key);
  let data = {};
  try {
    if (token) {
      const authorize = JSON.parse(token);
      const res = await fetch(url, {
        method: "put",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          "x-access-token": authorize.accessToken,
        },
        body: JSON.stringify(body),
      });
      data = await res.json();

    }
  } catch (error) {
    console.error(error);

  }
  return data;
};

export default updateDataApi;
