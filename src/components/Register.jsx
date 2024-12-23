import { useState } from 'react'
import Header from "./Header";

const Register = () =>{

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [pwd2, setPwd2] = useState('');

    const validarInput = (e) => {
        e.preventDefault();
        
        // ● Todos los campos son obligatorios (no pueden estar vacíos).
        if(!email.trim() || !pwd.trim() || !pwd2.trim()){
            alert('Debe rellenar todos los campos');
            return;
        }
        // ● El password debe tener al menos 6 caracteres.
        else if(pwd.length < 6){
            alert('El password debe tener al menos 6 caracteres');
            return;
        }
        // ● El password y la confirmación del password deben ser iguales.
        else if(pwd !== pwd2){
            alert('No coinciden ambas contraseñas');
            return;
        }
        alert('Registro exitoso.')
    }

    return (
        <>
            <Header/>
            <main>
                <form onSubmit={validarInput}>
                    <h3>Registro</h3>
                    <label htmlFor="Mail">Email</label>
                    <input type="text" name='Mail' placeholder='Ingrese su email...' onChange={(e) => setEmail(e.target.value)} value={email} />
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name='password' placeholder='Ingrese su contraseña...' onChange={(e) => setPwd(e.target.value)}  value={pwd} />
                    <label htmlFor="password2">Reingrese su contraseña</label>
                    <input type="password" name='password2' placeholder='Repita su contraseña...' onChange={(e) => setPwd2(e.target.value)} value={pwd2}/>
                    <button type="submit">Registrar</button>
                </form>
            </main>
        </>
    )
}

export default Register;