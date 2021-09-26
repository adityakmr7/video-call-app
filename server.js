const app = require("express")();

const server = require("http").createServer(app);
const cors = require("cors");

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors());

const PORT = process.env.PORT || 8080;
app.get("/", (req, res) => {
  res.send("SERVER IS RUNNING");
});

let store = [];

io.on("connection", (socket) => {
  socket.emit("me", socket.id);

  socket.on("disconnect", () => {
    socket.broadcast.emit("callended");
  });
  socket.on("callUser", ({ userToCall, signalData, from, name }) => {
    io.to(userToCall).emit("callUser", { signal: signalData, from, name });
  });
  socket.on("answerCall", (data) => {
    io.to(data.to).emit("callAccepted", data.signal);
  });
  socket.on("chat", (data) => {
    let obj = {};
    obj.id = data.id;
    obj.message = data.message;
    obj.isSend = true;
    store.push(obj);
    io.emit("chat", store);
  });
});

server.listen(PORT, () => console.log(`listening on server ${PORT}`));
