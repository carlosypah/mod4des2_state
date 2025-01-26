import { Link } from "react-router-dom";
import caja from '../assets/imgs/PizzaBox.png';

const NotFound = () =>{

    return(
        <div className="notFound">
            <div className="errorUp"></div>
            <div className="errorCenter text-white ms-3 text-decoration-none">
                
                <img src={ caja } alt="" /> <h2>Error 404</h2>
                <h5 ><p className=""> 
                        No pudimos encontrar la página que buscas.</p>
                        <Link to="/" className="text-white ms-3 text-decoration-none">
                            Volver al 🍕 Inicio
                        </Link>
                    
                </h5>
            </div>
            <div className="errorBelow"></div>
        </div>
    )
}

export default NotFound;