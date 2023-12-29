const undefinedFunc = (value) => {
  if (value == "undefined") {
    return undefined;
  } else if (value == "null") {
    return null;
  } else if (value == "false") {
    return false;
  } else if (value == "true") {
    return true;
  }
  return value;
};

module.exports = undefinedFunc;
