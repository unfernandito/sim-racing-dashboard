import dgram from "dgram";
import { packetParser } from "./lib";

const server = dgram.createSocket("udp4");

server.on("error", (err: Error) => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});

server.on("message", (msg, remote: string) => {
  packetParser(msg);
  console.log(remote);
});

server.on("listening", () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(41234);
