import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { pizzaCart } from "../assets/js/pizzas";

const Cart = () =>{

    const [carrito,setCarrito] = useState(pizzaCart)
    
    //sumar o restar del carrito
    const restarPizza = (nombrePizza) => {
        const nuevoCarrito = [...carrito]
        const pizza = carrito.filter(p => p.name === nombrePizza)[0]

        //eliminar si es la útima pizza
        if(pizza.count === 1){
            setCarrito(nuevoCarrito.filter(p => p.name != nombrePizza))
        }
        else {
            const index = nuevoCarrito.findIndex(p => p.name === nombrePizza)
            nuevoCarrito[index].count--
            setCarrito(nuevoCarrito)
        }
    }
    const sumarPizza = (nombrePizza) => {
        const nuevoCarrito = [...carrito]
        
        const index = nuevoCarrito.findIndex(p => p.name === nombrePizza)
        nuevoCarrito[index].count++
        setCarrito(nuevoCarrito)
    }

    const calcularTotalInicio = () =>{
        const suma = carrito.reduce(function(prev,current){return prev + +current.price * current.count},0)
        // console.log(suma)
        return suma
    }
    return(
        <div className='cart'>
            <h3>Detalle del pedido:</h3>
                {carrito.map((p) => 
                    <div key={p.id} className='cart-item'>
                        <img src={p.img} alt={p.name} className='item-img' />
                        <span  className='item-name'>{p.name}</span>
                        <span  className='item-price'>${p.price}</span>
                        <Button variant="outline-danger" onClick={() => restarPizza(p.name)}>-</Button>
                        <span className='item-count'>{p.count}</span>
                        <Button variant="outline-primary" onClick={() => sumarPizza(p.name)}>+</Button>


                    </div>    
                )}
            {/* <p><span id="total"></span></p> */}
            <Form.Label>Total: ${calcularTotalInicio()}</Form.Label>
            <Button variant="dark">Pagar</Button>
        </div>
    )
}

export default Cart