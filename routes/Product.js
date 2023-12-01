import express from "express";
const router = express.Router();
import {
  addProduct,
  categoryWiseProducts,
  deleteProductbyId,
  getAllProducts,
  getProductbyId,
  relatedProducts,
  updateProductbyId,
} from "../controllers/Products.js";
import { addCateory, getCategories } from "../controllers/Category.js";
import { isAdmin, verifyUser } from "../passport.js";

//routes
router.post("/product", verifyUser, isAdmin, addProduct);
router.put("/product/:pid", verifyUser, isAdmin, updateProductbyId);
//get products
router.get("/product", getAllProducts);
//single product
router.get("/product/:pid", getProductbyId);
//delete rproduct
router.delete("/product/:pid", verifyUser, isAdmin, deleteProductbyId);

//similar product
router.get("/related-product/:pid/:cname", relatedProducts);
//category wise product

router.get("/category/:cid/products", categoryWiseProducts);

router.get("/category", getCategories);
router.post("/category", verifyUser, isAdmin, addCateory);

export default router;
