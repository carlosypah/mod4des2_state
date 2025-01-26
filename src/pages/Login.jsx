import {useState} from 'react'
import Header from "../components/Header";

const Login = () => {


    const [email,setEmail] = useState('')
    const [pwd,setPwd] = useState('')

    const validarLogin = (e) =>{
        e.preventDefault();
        //● Todos los campos son obligatorios (no pueden estar vacíos).
        if(!email.trim() || !pwd.trim() ){
            alert('Debe rellenar todos los campos');
            return;
        }
        // ● El password debe tener al menos 6 caracteres.
        else if(pwd.length < 6){
            alert('El password debe tener al menos 6 caracteres');
            return;
        }
        alert('Log In Exitoso.')
        return;
    }

    return (
        <>
            <Header/>
            <main>

                <form onSubmit={validarLogin}>
                    <h3>Login</h3>
                    <label htmlFor="Mail">Email</label>
                    <input type="text" name='Mail' placeholder='Ingrese su email' onChange={(e) => setEmail(e.target.value)} value={email} />
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='Ingrese su contraseña' onChange={(e) => setPwd(e.target.value)}  value={pwd} />
                    <button type="submit">Log In</button>
                </form>
            </main>
        </>

    )
}

export default Login;