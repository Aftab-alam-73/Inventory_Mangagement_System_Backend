import express, { Response } from "express";
import authRoutes from "./routes/Auth";
import inventoryRoutes from "./routes/Inventory";
import billRoutes from "./routes/Bill";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/inventory", inventoryRoutes);
app.use("/api/bill", billRoutes);

const PORT = process.env.PORT || 8800;

app.get("/", (__, res: Response) => {
  res.send("Welcome to Inventory Management System");
});

app.listen(PORT, function () {
  console.log("Server is running on port", PORT);
});
