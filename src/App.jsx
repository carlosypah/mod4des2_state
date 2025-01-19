import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Pizza  from './components/Pizza';
// import Register from './components/Register';
// import Login from './components/Login';
// import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navbar/>
      <Pizza />
      {/* <Home/> */}
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Cart /> */}
      <Footer/>
    </>
  )
}

export default App;