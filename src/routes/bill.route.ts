import express from "express";
import { bills } from "../controllers/bill.controller";
import { verifyToken } from "../middleware/TokenValidation";

const router = express.Router();

router.get("/", bills.getAllBills);
router.get("/:id", bills.getSingleBill);
router.post("/", verifyToken, bills.addBill);
router.delete("/:id", verifyToken, bills.removeBill);
router.put("/", verifyToken, bills.updateBill);

export default router;