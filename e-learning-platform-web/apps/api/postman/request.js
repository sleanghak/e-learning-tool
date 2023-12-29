const { Header, Item } = require("postman-collection");
const rawHeaderString =
  "Authorization:\nContent-Type:application/json\ncache-control:no-cache\n";

const apiEndpoint = process.env.API_ENDPOINT;
const header = Header.parse(rawHeaderString).map((h) => new Header(h));
const Request = (reqName, reqMethod, reqUrl, reqBody) => {
  const req = new Item({
    name: reqName,
    request: {
      header: header,
      url: apiEndpoint + reqUrl,
      method: reqMethod,
      body: {
        mode: "raw",
        raw: JSON.stringify(reqBody),
      },
      auth: null,
    },
  });
  return req;
};

module.exports = {
  Request,
};
