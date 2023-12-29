const db = require("../../models");
const { returnDataSocket, detailDocument } = require("./returnDataSocket");
const realtimeData = (socket) => {
  // Socket connect to client side
  socket.on("meta-course", ({ disable, page, startDate, endDate }) => {
    returnDataSocket({
      disable,
      page,
      startDate,
      endDate,
      collection: db.course,
      eventName: "course",
      socket,
    });
  });
  socket.on("meta-post", ({ disable, page, startDate, endDate }) => {
    returnDataSocket({
      disable,
      page,
      startDate,
      endDate,
      collection: db.post,
      eventName: "post",
      socket,
    });
  });
  // Socket connect to client side
  socket.on("meta-student_work", ({ disable, page, startDate, endDate }) => {
    returnDataSocket({
      disable,
      page,
      startDate,
      endDate,
      collection: db.student_work,
      eventName: "student_work",
      socket,
    });
  });
  // Socket connect to client side
  socket.on("meta-partner", ({ disable, page, startDate, endDate }) => {
    returnDataSocket({
      disable,
      page,
      startDate,
      endDate,
      collection: db.partner,
      eventName: "partner",
      socket,
    });
  });
  socket.on("meta-news", ({ disable, page, startDate, endDate }) => {
    console.log({ disable, page, startDate, endDate });
    returnDataSocket({
      disable,
      page,
      startDate,
      endDate,
      collection: db.news,
      eventName: "news",
      socket,
    });
  });

  socket.on("meta-department", ({ disable, page, startDate, endDate }) => {
    console.log({ disable, page, startDate, endDate });
    returnDataSocket({
      disable,
      page,
      startDate,
      endDate,
      collection: db.subject,
      eventName: "department",
      socket,
    });
  });
  socket.on("meta-contact_history", ({ disable, page, startDate, endDate }) => {
    console.log({ disable, page, startDate, endDate });
    returnDataSocket({
      disable,
      page,
      startDate,
      endDate,
      collection: db.contact_history,
      eventName: "contact_history",
      socket,
    });
  });
  socket.on(
    "meta-contact_us",
    ({ disable, page, status, startDate, endDate }) => {
      console.log({ disable, page, startDate, endDate });
      returnDataSocket({
        disable,
        status,
        page,
        startDate,
        endDate,
        collection: db.contact_us,
        eventName: "contact_us",
        socket,
      });
    }
  );
  socket.on("meta-media", ({ disable, page, startDate, endDate }) => {
    console.log({ disable, page, startDate, endDate });
    returnDataSocket({
      disable,
      page,
      startDate,
      endDate,
      collection: db.media,
      eventName: "media",
      socket,
    });
  });
  socket.on("meta-invoice", ({ status, page, disable, startDate, endDate }) => {
    console.log({ status, page, startDate, endDate });
    returnDataSocket({
      status,
      page,
      disable,
      startDate,
      endDate,
      collection: db.invoice,
      eventName: "invoice",
      socket,
      isInvoice: true,
    });
  });
  socket.on("meta-class", ({ status, disable, page, startDate, endDate }) => {
    console.log({ status, page, startDate, endDate });
    returnDataSocket({
      status,
      disable,
      page,
      startDate,
      endDate,
      collection: db.class,
      eventName: "class",
      socket,
    });
  });
  socket.on("meta-user", ({ role }) => {
    console.log({ role });
    returnDataSocket({
      collection: db.user,
      eventName: "user",
      socket,
      role,
    });
  });

  // Detail data given by ID
  socket.on("detail-courseId", ({ id }) => {
    detailDocument({
      collection: db.course,
      id,
      eventName: "courseId",
      socket,
    });
  });
};

module.exports = realtimeData;
