import express from "express";
import { getAllProducts } from "../Controllers/product.Controller.js"; // Adjust path accordingly

const router = express.Router();

router.get("/products", getAllProducts); // Define route to fetch all products

export default router;
