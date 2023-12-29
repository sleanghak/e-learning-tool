const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const cors = require("cors");
const http = require("http");
const app = express();
const server = http.createServer(app);
const socketio = require("socket.io");
const fs = require("fs");
dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 3000;
const connectDB = require("./connection");
const { addUser, findConnectedUser } = require("./utils/func/roomActions");
const {
  loadMessages,
  sendMsg,
  setMsgToUnread,
  deleteMsg,
} = require("./utils/func/messageActions");
const {
  baseUrl,
  baseUrl_client,
  baseUrl_coach,
  baseUrl_admin,
  dataDaseUrl,
} = require("./utils/constant/baseUrl");
const realtimeData = require("./utils/func/realtimeData");
const postmanCollection = require("./postman");
const multer = require("multer");
const forms = multer({ dest: "uploads" });
// Connect Database
connectDB();
// cors provides Express middleware to enable CORS
app.use(
  cors({
    origin: [baseUrl_client, baseUrl_coach, baseUrl_admin],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// Log Request
app.use(morgan("tiny"));
// accept json
app.use(bodyparser.json());
app.use(bodyparser.urlencoded());

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }));
app.use(forms.array("files"));
// web-socket
const io = socketio(server, {
  transports: ["polling"],
  cors: {
    origin: [baseUrl_client, baseUrl_coach, baseUrl_admin],
  },
});

io.on("connection", (socket) => {
  socket.on("join", async ({ userId }) => {
    const users = await addUser(userId, socket.id);

    setInterval(() => {
      socket.emit("connectedUsers", {
        users: users.filter((user) => user.userId !== userId),
      });
    }, 10000);
  });

  socket.on("loadMessages", async ({ userId, messageWith }) => {
    const { chat, error } = await loadMessages(userId, messageWith);
    console.log("all messages:", chat, "Error:", error);
    !error
      ? socket.emit("messagesLoaded", { chat })
      : socket.emit("noChatFound");
  });
  socket.on("sendNewMsg", async ({ userId, msgSendToUserId, msg }) => {
    const { newMsg, error } = await sendMsg(userId, msgSendToUserId, msg);
    const recieverSocket = findConnectedUser(msgSendToUserId);
    console.log("====", recieverSocket);
    if (recieverSocket) {
      console.log("socket id", recieverSocket.socketId);
      // WHEN YOU WANT TO SEND MESSAGE TO A PARTICULAR SOCKET
      // console.log("Message Sent Server ====", newMsg);
      io.to(recieverSocket.socketId).emit("newMsgReceived", { newMsg });
    } else {
      await setMsgToUnread(msgSendToUserId);
    }
    // console.log("New Messsage", newMsg);
    // console.log("Error", error);
    if (!error) {
      console.log("Message Sent Server", newMsg);
      socket.emit("msgSent", { newMsg });
    }
  });
  socket.on("deleteMsg", async ({ userId, messageWith, messageId }) => {
    console.log("Delete Msg", userId);
    const res = await deleteMsg(userId, messageWith, messageId);
    console.log("Delete Msg", res);
    if (res.success) {
      socket.emit("msgDeleted");
    }
  });

  realtimeData(socket);

  socket.on("disconnect", () => {
    console.log(`socket ${socket.id} disconnected`);
  });
});

module.exports = io;

// app.use("/", require("./routes/router"));

require("./routes/auth.routes")(app);
require("./routes/course.routes")(app);
require("./routes/class.routes")(app);
require("./routes/coach.time.routes")(app);
require("./routes/inventory.routes")(app);
require("./routes/lesson.routes")(app);
require("./routes/subject.routes")(app);
require("./routes/video.routes")(app);
require("./routes/user.routes")(app);
require("./routes/default.routes")(app);
require("./routes/classwork.routes")(app);
require("./routes/contact.history.routes")(app);
require("./routes/post.routes")(app);
require("./routes/dashboard.routes")(app);
require("./routes/certificate.routes")(app);
require("./routes/review.routes")(app);
require("./routes/chat.routes")(app);
require("./routes/invoice.routes")(app);
require("./routes/contact.us.routes")(app);
require("./routes/media.routes")(app);
require("./routes/student_work.routes")(app);
require("./routes/partner.routes")(app);
require("./routes/news.routes")(app);
require("./routes/notification.routes")(app);
require("./routes/test.file.routes")(app);

// // Convert the collection to JSON
// const collectionJSON = postmanCollection.toJSON();
// // Create a colleciton.json file. It can be imported to postman
// fs.writeFile(
//   "./reancode-api-collection.json",
//   JSON.stringify(collectionJSON),
//   (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("File saved");
//   }
// );

server.listen(PORT, () => {
  console.log(`Server is running ${baseUrl}`);
  console.log(baseUrl_client, baseUrl_coach, baseUrl_admin, dataDaseUrl);
});
