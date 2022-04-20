import app from "./app";
import { Server as WebsocketServer } from "socket.io";
import http from "http";

const server = http.createServer(app);
const httpServer = server.listen(3000);
const io = new WebsocketServer(httpServer);

console.log("Server is running in port 3000");