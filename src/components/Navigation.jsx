import Button from 'react-bootstrap/Button';
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () =>{
    const total = 25000;
    const token = false;
    
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
                🛒 Total ${total.toLocaleString('es-CL')}
                </Link>
            </Container>

            </Navbar>

        // <div className='navegation'>
        //     <span className='navbar-logo item1'>Pizzería Mamma Mía!</span>
        //     <Button variant='outline-light' className='item2'>🍕 Home</Button>
        //     {token ? 
        //         <>
        //             <Button variant='outline-light' className='item3'>🔒 Profile</Button>
        //             <Button variant='outline-light' className='item4'>🔒 Logout</Button>
        //         </> : 
        //         <>
        //             <Button variant='outline-light' className='item3'>🔐 Login</Button> 
        //             <Button variant='outline-light' className='item4'>🔐 Register</Button>
        //         </>
        //     } 
        //     <span  className='item5'>.</span>   
        //     <Button variant='outline-primary' className='item6'>🛒 Total ${total.toLocaleString('es-CL')}</Button>
        // </div>
    );
}

export default Navigation;