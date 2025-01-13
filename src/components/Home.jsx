import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "../assets/js/pizzas";

const Home = () =>{

    //obtener arreglo de pizzas desde el json
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