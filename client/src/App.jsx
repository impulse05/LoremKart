import React from "react"
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './Pages/Login'
import RegisterPage from './Pages/Register'
import ProductPage from './Pages/Product'
import AdminPage from './Pages/Admin'
import HomePage from './Pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyProfile from './Pages/MyProfile'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/MyProfile" element={<MyProfile />} />
      </Routes>
    </Router>
  )
}

export default App
