import { createServer, IncomingMessage, Server, ServerResponse } from "http";


const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url;
    const method = req.method;
    if (url == "/") {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          success: true,
          data: "This is Home Page",
        }),
      );
    } else if (url?.startsWith("/products")) {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          success: true,
          data: "This is Products Page",
        }),
      );
    } else {
      res.writeHead(404, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          success: false,
          data: "404 page not found",
        }),
      );
    }
  },
);

server.listen(3000, () => {
  console.log("Server is running on port: 3000");
});
