import Category from "../models/Category.js";

export const getCategories = async (req, res) => {
  try {
    return res.status(200).json({
      message: "data received",
      data: await Category.find({}),
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      info: "Error in category",
      message: error.message,
    });
  }
};

export const addCateory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) throw new Error("Please send cateory name");
    const category = new Category({
      name,
    });
    await category.save();
    res.status(200).json({
      category,
      message: "Category created",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      info: "Error in category",
      message: error.message,
    });
  }
};
