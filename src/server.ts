import { createServer } from "http";
import app from "./app";

const server = createServer(app);

server.listen(Number(process.env.PORT) || 3000, '0.0.0.0', () => {
  console.log(
    `Server is running on http://localhost:${process.env.PORT || 3000}`
  );
});
