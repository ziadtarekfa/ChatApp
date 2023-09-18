import express from "express";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000"
    }
})

io.on("connection", (socket) => {
    // ...
});
httpServer.listen(5000, () => {
    console.log("Server is now listening");
})