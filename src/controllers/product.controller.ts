import type { IncomingMessage, ServerResponse } from "http";
import { createProduct, productService } from "../services/product.service";
import type { IProduct } from "../types/product";
import { bodyParser } from "../utils/parseBody";
import { sendResponse } from "../utils/sendResponse";

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
    sendResponse(res, true, 200, "Products retrieved successfully", products);
  } else if (method === "GET" && id !== null) {
    const product = products.find((p: IProduct) => p.id == Number(id));
    if (!product) {
      sendResponse(res, false, 404, "Product not found");
    }
    sendResponse(res, true, 200, "Product retrieved successfully", product);
  } else if (method === "POST" && url === "/products") {
    try {
      const data = await bodyParser(req);
      const newProduct: IProduct = {
        id: Date.now(),
        ...data,
      };
      const updatedProducts = [...products, newProduct];
      createProduct(updatedProducts);
      sendResponse(res, true, 201, "Product created successfully", newProduct);
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
        sendResponse(res, false, 404, "Product not found");
      }
      const updatedProduct: IProduct = {
        ...products[productIndex],
        ...data,
      };
      products[productIndex] = updatedProduct;
      createProduct(products);
      sendResponse(
        res,
        true,
        200,
        "Product updated successfully",
        updatedProduct,
      );
    } catch (error) {
      console.log(error);
    }
  } else if (method === "DELETE" && id !== null) {
    const productIndex = products.findIndex(
      (p: IProduct) => p.id == Number(id),
    );
    if (productIndex < 0) {
      sendResponse(res, false, 404, "Product not found");
    }
    const updatedProducts = products.filter(
      (p: IProduct) => p.id !== Number(id),
    );
    createProduct(updatedProducts);
    sendResponse(res, true, 200, "Product deleted successfully");
  }
};
