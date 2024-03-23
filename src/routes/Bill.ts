import express from "express";
import {
  addBill,
  getAllBills,
  getSingleBill,
  removeBill,
  updateBill,
} from "../controllers/bill";
import { verifyToken } from "../middleware/TokenValidation";

const router = express.Router();

router.get("/getallbills", getAllBills);
router.get("/:id", getSingleBill);
router.post("/addbill", verifyToken, addBill);
router.delete("/removebill/:id", verifyToken, removeBill);
router.put("/updatebill", verifyToken, updateBill);

export default router;
