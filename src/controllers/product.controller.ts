import type { IncomingMessage, ServerResponse } from "http";
import { url } from "inspector";
import { productService } from "../services/product.service";

export const productController = (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const method = req.method;
  if (method === "GET") {
    const products = productService();
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        success: true,
        message: "Products retrieved successfully",
        data: products,
      }),
    );
  }
};
