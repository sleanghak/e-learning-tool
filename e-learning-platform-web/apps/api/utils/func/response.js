const { baseUrl } = require("../constant/baseUrl");
const successResponse = (res, statusCode = 200, data) => {
  return res.status(statusCode).send({
    statusCode: statusCode,
    data: data,
    count: data?.length,
  });
};

const errorResponse = (res, statusCode = 500, error, message = undefined) => {
  return res.status(statusCode).send({
    statusCode: statusCode,
    data: error?.message || "some error occured",
    message: message,
  });
};
const pagination = (res, page, pages, limit, data, total, module, moreInfo) => {
  // console.log({ res, page, pages, limit, data, total });
  let prevPage = null,
    nextPage = null;
  // find previous page
  if (page != 1) {
    prevPage = `${baseUrl}/api/v1/${module}?page=${page - 1}&limit=${limit}`;
  }
  //find next page
  if (page < pages) {
    nextPage = `${baseUrl}/api/v1/${module}?page=${Number(page) +
      1}&limit=${limit}`;
  }
  return res.status(200).send({
    data: data,
    pages: pages,
    moreInfo: moreInfo,
    count: data.length,
    total: total,
    statusCode: 200,
    firstPage: `${baseUrl}/api/v1/${module}?page=1&limit=${limit}`,
    prevPage: prevPage,
    nextPage: nextPage,
    self: `${baseUrl}/api/v1/${module}?page=${page}&limit=${limit}`,
    lastPage: `${baseUrl}/api/v1/${module}?page=${pages}&limit=${limit}`,
  });
};

module.exports = { successResponse, errorResponse, pagination };
