var data;
const returnDataActive = async (collection) => {
  try {
    data = await collection.find({ disable: false });
  } catch (error) {
    console.error(error);
  }
  return data;
};

const returnDataDisactive = async (collection) => {
  try {
    data = await collection.find({ disable: true });
  } catch (error) {
    console.error(error);
  }
  return data;
};

const returnDataAll = async (collection) => {
  try {
    data = await collection.find();
  } catch (error) {
    console.error(error);
  }
  return data;
};

module.exports = {
  returnDataActive,
  returnDataDisactive,
  returnDataAll,
};
