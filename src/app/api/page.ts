import { Server } from "socket.io";
import { NextApiResponseServerIO } from "../types/next";
import { NextApiRequest } from "next";
import { Server as NetServer } from "http";

export default function SocketHandler(req: NextApiRequest, res: NextApiResponseServerIO) {
  if (res.socket.server.io) {
    console.log("Already set up")
    res.end();
    return;
  }

  const httpServer: NetServer = res.socket.server as any;
  const io = new Server(httpServer, {
    path: "/api/",
  });
  res.socket.server.io = io;

  io.on("connection", (socket) => {
    socket.on("send-message", (obj) => {
      io.emit("receive-message", obj);
    });
  });

  console.log("Setting up socket");
  res.end();
}