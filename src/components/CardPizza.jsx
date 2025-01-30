import * as React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CarritoContext } from '../context/CarritoContext';
import { useContext, useState } from 'react';

const CardPizza = ({llave,name,price,ingredients,img}) => {

    const {carrito,setCarrito} = useContext(CarritoContext)

    const [lineaBoleta,setLineaBoleta] = useState({
        llave:"",
        img:"",
        name:"",
        price:0,
        count:0
    });

    const sumarPizza = (Pllave,Pname,Pprice,Pimg) => {
        //console.log('holaKey: ',llave,name,price,ingredients,img);
        //agregar una fila al carro si es una nuevo tipo de pizza, sumar +1 si ya tenía una pizza igual
        const c = nuevaPizzaEnBoleta(Pllave); 
        // console.log(!p.length > 0);
        console.log('existe?: ',c);
        
        if (c.length == 0 ) {
            console.log('nueva fila',c.length)
            //la pizza agregada no estaba en el carro, agregar nueva linea
            console.log('sumarPizza',Pllave,Pname,Pprice,Pimg)
            // setLineaBoleta(new {llave: Pllave,img: Pimg,name: Pname,price: Pprice,count:1})
            const lb = {llave: Pllave,img: Pimg,name: Pname,price: Pprice,count:1}
            console.log('lineaBoleta',lb)
            if(carrito.length == 0)
            {
                const arrayInicio = [lb];
                console.log(arrayInicio)
                setCarrito(arrayInicio);
            }
            else
            {
                setCarrito([...carrito,lb])
            }
            console.log('carrito',carrito)
        }
        else{
            console.log('sumar 1 pizza a la ya agregada: ',c)
            //la pizza ya estaba en el carro, sumar 1 al count
            const lb = {llave: c[0].llave,img: c[0].img,name: c[0].name,price: c[0].price,count:c[0].count+1}
            console.log('lb: ',lb)
            // setLineaBoleta({...lineaBoleta,llave:,img:,name:,price:,count:});

            setCarrito([...carrito.filter((p) => p.llave !== c[0].llave),lb])
        }
    }

    const nuevaPizzaEnBoleta = (llave) => {
        console.log('existe?',llave)
        return carrito.filter((p) => p.llave === llave);
    }

    return(
        <React.Fragment key={llave}>
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
                <Card.Body>
                    <span className='ingredientes'>Ingredientes</span><br />
                    <span>🍕 {ingredients.map((i) => <li key={i}>{i}</li> )}
                    </span>
                </Card.Body>
                <Card.Body>
                    <span className='precio'> Precio:${price.toLocaleString('es-CL')}</span>
                    <section className='card-buttons'>
                        <Button variant="outline-dark">Ver Más 👀</Button>
                        <Button variant="dark" onClick={() => sumarPizza(llave,name,price,img)} >Añadir 🛒</Button>
                    </section>
                </Card.Body>
                
            </Card>
        </React.Fragment>
    )
}

export default CardPizza;