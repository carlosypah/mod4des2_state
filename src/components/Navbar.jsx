import Button from 'react-bootstrap/Button';

const Navbar = () =>{
    const total = 25000;
    const token = false;
    
    return (
        <div className='navegation'>
            <span className='navbar-logo item1'>Pizzería Mamma Mía!</span>
            <Button variant='outline-light' className='item2'>🍕 Home</Button>
            {token ? 
                <>
                    <Button variant='outline-light' className='item3'>🔒 Profile</Button>
                    <Button variant='outline-light' className='item4'>🔒 Logout</Button>
                </> : 
                <>
                    <Button variant='outline-light' className='item3'>🔐 Login</Button> 
                    <Button variant='outline-light' className='item4'>🔐 Register</Button>
                </>
            } 
            <span  className='item5'>.</span>   
            <Button variant='outline-primary' className='item6'>🛒 Total ${total.toLocaleString('es-CL')}</Button>
        </div>
    );
}

export default Navbar;