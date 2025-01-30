import { useContext } from 'react'
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CarritoContext } from '../context/CarritoContext';

const Navigation = () =>{

    const {carrito,setCarrito} = useContext(CarritoContext);
    // const total = 25000;
    const token = false;
    
    const calcularTotalInicio = () =>{
        const suma = carrito.reduce(function(prev,current){return prev + +current.price * current.count},0)
        // console.log(suma)
        return suma
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container className="justify-content-start">
                <Navbar.Brand>Pizzería Mamma Mía!</Navbar.Brand>
                <Link to="/" className="text-white ms-3 text-decoration-none">
                🍕 Inicio
                </Link>
                <Link to="/register" className="text-white ms-3 text-decoration-none">
                Registro
                </Link>
                <Link to="/login" className="text-white ms-3 text-decoration-none">
                Login
                </Link>
                <Link to="/cart" className="text-white ms-3 text-decoration-none">
                Carro
                </Link>
                <Link to="/profile" className="text-white ms-3 text-decoration-none">
                Perfil
                </Link>
                <Link to="/cart" className="text-white ms-3 text-decoration-none">
                🛒 Total ${calcularTotalInicio().toLocaleString('es-CL')}
                </Link>
            </Container>

            </Navbar>
    );
}

export default Navigation;