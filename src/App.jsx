import Navigation from "./components/Navigation";
import { Navigate, Route, Routes } from "react-router-dom";
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
import CarritoProvider from "./context/CarritoContext";
import { TokenContext } from "./context/TokenContext";
import { useContext } from 'react'

function App() {
    
  const {token,setToken} = useContext(TokenContext);
  console.log('app: ',token)
  return (
        <CarritoProvider>
          <Navigation/>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/register" element={ !token ? <Register /> : <Navigate to="/"/>}/>
            <Route path="/login" element={ !token ? <Login /> : <Navigate to="/"/>}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/pizza/:id" element={<Pizza />}/>

            <Route path="/profile" element={ token ? <Profile /> : <Navigate to="/login"/> }/>
            <Route path="/404" element={<NotFound />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
          <Footer/>
        </CarritoProvider>
  )
}

export default App;