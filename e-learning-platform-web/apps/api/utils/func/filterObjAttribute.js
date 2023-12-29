const filterObjAttribute = (obj) => {
  for (value in obj) {
    if (!obj[`${value}`]) {
      delete obj[`${value}`];
    }
  }
  return obj;
};
module.exports = filterObjAttribute;
