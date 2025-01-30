import { useState, useEffect } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";

const Home = () =>{

    const [pizzas,setPizzas] = useState([]);
    
    useEffect(() => {
        obtenerPizzas();
    });

    const obtenerPizzas = async () =>{
        const url = "http://localhost:5000/api/pizzas/";
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        setPizzas(data);
    }

    return (
        <>
            <Header/>
            <main>
                {
                    pizzas.map((p) => 
                        <CardPizza
                            key={p.id}
                            llave={p.id}
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