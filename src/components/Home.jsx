import { useState, useEffect } from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";

const Home = () =>{

    const [pizzas,setPizzas] = useState([]);
    //obtener arreglo de pizzas desde la API
    //función que consulta la API
    //
    useEffect(() => {
        obtenerPizzas();
    });

    const obtenerPizzas = async () =>{
        const url = "http://localhost:5000/api/pizzas";
        const response = await fetch(url);
        const data = await response.json();
        setPizzas(data);
    }

    //crear N CardPizzas
    return (

        <>
        <Header/>
        <main>
            {
                pizzas.map((p) => 
                    <CardPizza
                        key={p.id}
                        name={p.name}
                        price={p.price}
                        ingredients={p.ingredients}
                        img={p.img}
                    />
                )
            }
        </main>
        </>
    )
}

export default Home;