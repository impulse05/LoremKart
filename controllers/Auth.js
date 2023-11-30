import User from "../models/User.js";
import jwt from "jsonwebtoken";
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    if (!name || !phone || !address || !email || !password) {
      throw new Error("Send name, email, password, phone, address");
    }

    const alreadyExist = await User.findOne({ email });

    if (alreadyExist) {
      throw new Error("User already exists");
    }
    const user = new User({
      name,
      email,
      phone,
      address,
    });

    const result = await User.register(user, password);
    result.hash = undefined;
    result.salt = undefined;

    res.status(200).json({
      message: "User registered Successfully",
      user: result,
    });
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      info: "Error in registration",
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(202).json({
        message: "Send correct data to login",
      });
    }
    const { user } = await User.authenticate()(email, password);
    if (!user) {
      throw new Error("Invalid Credentials");
    }
    // console.log(user);

    var token = await user.getJwtToken();
    user.salt = undefined;
    user.hash = undefined;
    res.cookie("JWT", token);
    res.status(200).json({
      message: "Login successfully",
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      info: "Error in registration",
      message: error.message,
    });
  }
};

export const getMyProfile = async (req, res) => {
  res.status(200).json({
    success: true,
    data: req.user,
  });
};
