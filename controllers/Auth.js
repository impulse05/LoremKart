import User from "../models/User.js";
import jwt from "jsonwebtoken";
import crypto from "crypto";
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
      emailToken: crypto.randomBytes(64).toString("hex"),
      phone,
      address,
    });

    const result = await User.register(user, password);
    result.hash = undefined;
    result.salt = undefined;
    // TODO : send email to user with verify link
    // api/email-verify/token

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

    console.log(user);

    if (!user.isVerified) {
      throw new Error("Verify your E-mail");
    }
    // console.log(user);

    var token = await user.getJwtToken();
    user.salt = undefined;
    user.hash = undefined;
    res.cookie("jwt", token);
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

export const verifyEmail = async (req, res) => {
  try {
    const token = req.params.token;
    if (!token) throw new Error("Token is invalid or missing");

    const user = await User.findOne({
      emailToken: token,
    });
    if (!user) {
      throw new Error("Invalid token no user found");
    }
    user.isVerified = true;
    user.emailToken = null;
    await user.save();
    res.status(200).json({
      message: "You are verified you can login now",
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

export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) throw new Error("Send the email");

    const user = await User.findOne({ email });
    // check if user exists
    if (!user) {
      throw new Error("User does not exist");
    }

    user.forgetPasswordToken = crypto.randomBytes(20).toString("hex");

    // Set expire
    user.forgetPasswordExpiry = Date.now() + 20 * 60 * 1000;

    await user.save();
    // TODO send mail;
    res.status(200).json({
      message: "the reset link has been sent to your email",
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

export const resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;
    if (!password) {
      throw new Error("password is required", 400);
    }

    let user = await User.findOne({
      forgetPasswordToken: token,
      forgetPasswordExpiry: { $gt: Date.now() },
    });

    if (!user) {
      throw new Error("Invalid token");
    }

    // change the password
    user = await user.setPassword(password);

    user.forgetPasswordToke = undefined;
    user.forgetPasswordExpiry = undefined;
    await user.save();

    res.json({
      succes: true,
      message: "password reset",
      user,
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
