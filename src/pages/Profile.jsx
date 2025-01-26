import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Profile = () =>{

    return(
        <main>
            <form action="">
                <h3>Usuario</h3>
                <label htmlFor="Mail">Email</label>
                <input type="text" name='Mail' placeholder='Ingrese su email...' onChange={(e) => setEmail(e.target.value)} value='correo@dominio.com' />
                <Button variant="outline-primary">Cerrar sesión</Button>

                {/* <h2>mostrar un mail de usuario y un botón de cerrar sesión</h2> */}
            </form>
        </main>
    )
}
export default Profile;