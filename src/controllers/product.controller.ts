import type { IncomingMessage, ServerResponse } from "http";

export const getProducts = (req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(200, { "content-type": "application/json" });
  res.end(
    JSON.stringify({
      success: true,
      data: "This is Products Page",
    }),
  );
};
