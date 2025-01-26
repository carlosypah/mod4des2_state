import { useState } from 'react'
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import './App.css'
import Footer from './components/Footer';
import Home from './pages/Home';
import Pizza  from './pages/Pizza';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/pizza/p001" element={<Pizza />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/404" element={<NotFound />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      {/* <Pizza /> */}
      {/* <Home/> */}
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Cart /> */}
      <Footer/>
    </>
  )
}

export default App;