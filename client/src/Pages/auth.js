import axios from "axios";
import { toast } from "react-toastify";
const BASE_URL = "http://localhost:8080/api";
export const Login = async (email, password) => {
  try {
    const result = await axios.post(`${BASE_URL}/login`, {
      email,
      password,
    });
    console.log(result);
    if (result) {
      toast.success("Login succesfull");
      localStorage.setItem("token", result.data.token);
      localStorage.setItem("user", JSON.stringify(result.data.user));
      //   window.location = "/home";
    }
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
};

export const addProduct = async (product) => {
  try {
    console.log(product);
    const token = localStorage.getItem("token");
    if (!token) toast.error("you are not loggined in");
    const result = await axios.post(`${BASE_URL}/product`, product, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(result);
    if (result) {
      toast.success("Product added successfully");
    }
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message || error.message);
  }
};

export const signUp = async (body) => {
  try {
    const result = await axios.post(`${BASE_URL}/signup`, body);
    console.log(result);
    if (result) {
      toast.success("Registered succesfull");
      window.location = "/login";
    }
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
};

export const isAuthenticated = () => {
  if (localStorage.getItem("user")) {
    return JSON.parse(localStorage.getItem("user"));
  }
  return null;
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};
