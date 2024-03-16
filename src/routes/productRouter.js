import productController from "../controllers/productController.js";
import { Router } from "express";

const productRouter = Router();

// Rutas
productRouter.get("/", productController.getProduct);
// productRouter.post("/", );
// productRouter.put("/:id", );
// productRouter.delete("/:id", );

export default productRouter;
