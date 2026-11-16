import type { IncomingMessage, ServerResponse } from "http";
import { createProduct, productService } from "../services/product.service";
import type { IProduct } from "../types/product";
import { bodyParser } from "../utils/parseBody";

export const productController = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const products: IProduct[] = productService();
  const method = req.method;
  const url = req.url;
  const urlParams = url?.split("/");
  const id = urlParams && urlParams[1] === "products" ? urlParams[2] : null;
  if (url === "/products" && method === "GET") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        success: true,
        message: "Products retrieved successfully",
        data: products,
      }),
    );
  } else if (method === "GET" && id !== null) {
    const product = products.find((p: IProduct) => p.id == Number(id));
    if (!product) {
      res.writeHead(404, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          success: false,
          message: "Product not found",
        }),
      );
    }
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        success: true,
        message: "Product retrieved successfully",
        data: product,
      }),
    );
  } else if (method === "POST" && url === "/products") {
    try {
      const data = await bodyParser(req);
      const newProduct: IProduct = {
        id: Date.now(),
        ...data,
      };
      const updatedProducts = [...products, newProduct];
      createProduct(updatedProducts);
      res.writeHead(201, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          success: true,
          message: "Product created successfully",
          data: data,
        }),
      );
    } catch (error) {
      console.log(error);
    }
  } else if (method === "PUT" && id !== null) {
    try {
      const data = await bodyParser(req);
      const productIndex = products.findIndex(
        (p: IProduct) => p.id == Number(id),
      );
      if (productIndex < 0) {
        res.writeHead(404, { "content-type": "application/json" });
        res.end(
          JSON.stringify({
            success: false,
            message: "Product not found",
          }),
        );
      }
      const updatedProduct: IProduct = {
        ...products[productIndex],
        ...data,
      };
      const updatedProducts = [...products];
      updatedProducts[productIndex] = updatedProduct;
      createProduct(updatedProducts);
      res.writeHead(200, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          success: true,
          message: "Product updated successfully",
          data: updatedProduct,
        }),
      );
    } catch (error) {
      console.log(error);
    }
  } else if (method === "DELETE" && id !== null) {
    const productIndex = products.findIndex(
      (p: IProduct) => p.id == Number(id),
    );
    if (productIndex < 0) {
      res.writeHead(404, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          success: false,
          message: "Product not found",
        }),
      );
    }
    const updatedProducts = products.filter((p: IProduct) => p.id !== Number(id));
    createProduct(updatedProducts);
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        success: true,
        message: "Product deleted successfully",
      }),
    );
  }
};
