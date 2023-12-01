import Product from "../models/Product.js";

export const addProduct = async (req, res) => {
  try {
    const { name, price, image, quantity, category } = req.body;

    if (!name || !price || !image || !quantity || !category) {
      throw new Error("Please send name, price,image,quantity,category");
    }
    const product = new Product({
      name,
      price,
      image,
      quantity,
      category,
    });
    await product.save();
    res.status(200).json({
      product,
      message: "Product Created",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      info: "Error in category",
      message: error.message,
    });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    return res.status(200).json({
      message: "data received",
      data: await Product.find({}).populate("category", "name"),
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      info: "Error in category",
      message: error.message,
    });
  }
};

export const getProductbyId = async (req, res) => {
  try {
    throw new Error("Yet to be implemented");
  } catch (error) {
    return res.status(400).json({
      success: false,
      info: "Error in category",
      message: error.message,
    });
  }
};

export const updateProductbyId = async (req, res) => {
  try {
    throw new Error("Yet to be implemented");
  } catch (error) {
    return res.status(400).json({
      success: false,
      info: "Error in category",
      message: error.message,
    });
  }
};

export const deleteProductbyId = async (req, res) => {
  try {
    throw new Error("Yet to be implemented");
  } catch (error) {
    return res.status(400).json({
      success: false,
      info: "Error in category",
      message: error.message,
    });
  }
};

export const relatedProducts = async (req, res) => {
  try {
    throw new Error("Yet to be implemented");
  } catch (error) {
    return res.status(400).json({
      success: false,
      info: "Error in category",
      message: error.message,
    });
  }
};

export const categoryWiseProducts = async (req, res) => {
  try {
    throw new Error("Yet to be implemented");
  } catch (error) {
    return res.status(400).json({
      success: false,
      info: "Error in category",
      message: error.message,
    });
  }
};
