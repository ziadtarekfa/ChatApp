import express from "express";
import { Server } from "socket.io";
import mongoose from "mongoose";
import http from "http";
import { configDotenv } from "dotenv";

configDotenv();

const mongoURI = process.env.MONGO_URI;
const app = express();
const httpServer = http.createServer(app);

mongoose.connect(mongoURI).then(() => {
    console.log("Connected to MongoDB!");
    httpServer.listen(5000, () => {
        console.log("Server is now listening on port 5000");
    });
}).catch((error) => {
    console.log("Error connecting to database: " + error);
})

const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000"
    }
})


io.on("connection", (socket) => {
    // ...
});