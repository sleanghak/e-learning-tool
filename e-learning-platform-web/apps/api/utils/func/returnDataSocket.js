const filterObjAttribute = require("./filterObjAttribute");
const undefinedFunc = require("./undefinedFunc");
const returnDataSocket = async ({
  disable,
  page,
  startDate,
  endDate,
  collection,
  eventName,
  limit = 10,
  socket,
  status,
  isInvoice,
  role,
}) => {
  const dateQuery = filterObjAttribute({
    startDate: undefinedFunc(startDate) ? new Date(startDate) : undefined,
    endDate: undefinedFunc(endDate) ? new Date(endDate) : undefined,
  });
  try {
    if (role) {
      const data = await collection
        .find({ role: role })
        .sort({ createdAt: -1 });
      console.log(data);
      socket.emit(eventName, data);
      return;
    }
    const skipIndex = (page - 1) * limit;
    if (dateQuery.startDate && dateQuery.endDate) {
      const invoices = await collection
        .find({
          disable: false,
          createdAt: {
            $gte: dateQuery.startDate.toISOString(),
            $lte: dateQuery.endDate.toISOString(),
          },
        })
        .skip(skipIndex)
        .limit(limit)
        .sort({ createdAt: -1 });
      socket.emit(eventName, invoices);
      return;
    }
    console.log(isInvoice, status);
    if (Boolean(status) & isInvoice) {
      const invoices = await collection
        .find({ disable: false })
        .skip(skipIndex)
        .limit(limit)
        .sort({ createdAt: -1 });
      console.log("data", invoices);
      socket.emit(eventName, invoices);
      return;
    }
    if (status) {
      const invoices = await collection
        .find({
          disable: undefinedFunc(disable),
          status: undefinedFunc(status),
        })
        .skip(skipIndex)
        .limit(limit)
        .sort({ createdAt: -1 });
      console.log(invoices);
      socket.emit(eventName, invoices);
      return;
    }
    //for disable or active
    const invoices = await collection
      .find({
        disable: undefinedFunc(disable),
      })
      .skip(skipIndex)
      .limit(limit)
      .sort({ createdAt: -1 });
    console.log(eventName, invoices.length);
    socket.emit(eventName, invoices);
    return;
  } catch (error) {
    console.log(error);
    socket.emit(eventName, []);
  }
};

const detailDocument = async ({ collection, id, eventName, socket }) => {
  try {
    const data = await collection
      .findById(id)
      .populate("lessonIds")
      .populate({
        path: "lessonIds",
        populate: {
          path: "videoIds",
        },
      });
    if (!data) {
      console.log("data not found");
    }
    socket.emit(eventName, data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { returnDataSocket, detailDocument };
