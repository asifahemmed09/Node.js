import type { IncomingMessage, ServerResponse } from "http";
import { getProducts } from "../controllers/product.controller";

const routeHandler = (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url;
    const method = req.method;
    if (url == "/" && method == "GET") {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          success: true,
          data: "This is Home Page",
        }),
      );
    } else if (url?.startsWith("/products") && method == "GET") {
        getProducts(req,res)
    } else {
      res.writeHead(404, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          success: false,
          data: "404 page not found",
        }),
      );
    }
}


export default routeHandler;
