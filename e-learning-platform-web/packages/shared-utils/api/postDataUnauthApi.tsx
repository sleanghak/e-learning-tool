

/**
 *
 * @param {*} url : String
 * @param {*} body : Object
 * @returns
 */
const postDataUnauthApi = async (url: string, body: any) => {
  let data = {};
  try {
    const res = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(body),
    });
    data = await res.json();
    console.log(data);

  } catch (error) {
    console.error(error);

  }
  return data;
};

export default postDataUnauthApi;
