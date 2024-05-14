import express from "express";
import { inventory } from "../controllers/inventory.controller";
import { verifyToken } from "../middleware/TokenValidation";

const router = express.Router();

router.get("/", inventory.getAllProducts);
router.get("/:id", inventory.getSingleProduct);
router.post("/", verifyToken, inventory.addProduct);
router.delete("/:id", verifyToken, inventory.removeProduct);
router.put("/", verifyToken, inventory.updateProduct);

export default router;
