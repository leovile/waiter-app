import { Router } from "express";
import path from "node:path";
import multer from "multer";
import { createCategory } from "./app/useCases/categories/createCategory";
import { listCategories } from "./app/useCases/categories/listCategories";
import { listProducts } from "./app/useCases/products/listProducts";
import { createProduct } from "./app/useCases/products/createProduct";
import { listProductsByCategory } from "./app/useCases/categories/listProductsByCategory";
import { listOrders } from "./app/useCases/orders/listOrders";
import { createOrder } from "./app/useCases/orders/createOrders";
import { changeOrderStatus } from "./app/useCases/orders/changeOrderStatus";
import { cancelOrder } from "./app/useCases/orders/cancelOrder";
import { updateProduct } from "./app/useCases/products/updateProduct";
import { deleteProduct } from "./app/useCases/products/deleteProduct";
import { deleteCategory } from "./app/useCases/categories/deleteCategory";

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, "..", "uploads"));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

// List Categories
router.get("/categories", listCategories);
// Create Category
router.post("/categories", createCategory);
// Delete Category
router.delete("/categories/:categoryId", deleteCategory);
// List Products
router.get("/products", listProducts);
// Create Product
router.post("/products", upload.single("image"), createProduct);
// Get Products by Category
router.get("/categories/:categoryId/products", listProductsByCategory);
// Update Product
router.patch("/products/:productId", upload.single("image"), updateProduct);
// Delete product
router.delete("/products/:productId", deleteProduct);
// List Orders
router.get("/orders", listOrders);
// Create Order
router.post("/orders", createOrder);
// Change Order Status
router.patch("/orders/:orderId", changeOrderStatus);
// Delete/Cancel Order
router.delete("/orders/:orderId", cancelOrder);
