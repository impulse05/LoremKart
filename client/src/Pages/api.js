// all the apise
import axios from "axios";
import { toast } from "react-toastify";
const BASE_URL = "/api";
export const getProducts = async () => {
  // TODO API call
  try {
    const data = await axios.get(`${BASE_URL}/product`);
    console.log(data);
    return data.data.data;
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
};

export const getCategories = async () => {
  return [
    {
      _id: "6568ed0216fff846495d6caa",
      name: "Education",
      __v: 0,
    },
    {
      _id: "656a196a09af5680b013503f",
      name: "Sports",
      __v: 0,
    },
    {
      _id: "656a197409af5680b0135042",
      name: "Ramdin1",
      __v: 0,
    },
    {
      _id: "656a197809af5680b0135045",
      name: "Ramdin2",
      __v: 0,
    },
  ];
};
