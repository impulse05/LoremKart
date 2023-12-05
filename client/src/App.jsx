import React from "react"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from './Pages/Login'
import RegisterPage from './Pages/Register'
import ProductPage from './Pages/Product'
import AdminPage from './Pages/Admin'
import HomePage from './Pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyProfile from './Pages/MyProfile'
import NavBar from "./Components/Navbar"
import { ToastContainer } from "react-toastify"
import ProductForm from "./Pages/ProductForm";

function App() {
  return (
    <Router>
      <ToastContainer position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/MyProfile" element={<MyProfile />} />
        <Route path="/addproduct" element={<ProductForm />} />
      </Routes>
    </Router>
  )
}

export default App
