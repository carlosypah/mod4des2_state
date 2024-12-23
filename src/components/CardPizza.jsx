
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CardPizza = ({name,price,ingredients,img}) => {

    return(
        <>
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
                <Card.Body>
                    <span className='ingredientes'>Ingredientes</span><br />
                    <span>🍕 {ingredients.join(', ')}
                    </span>
                </Card.Body>
                <Card.Body>
                    <span className='precio'> Precio:${price.toLocaleString('es-CL')}</span>
                    <section className='card-buttons'>
                        <Button variant="outline-dark">Ver Más 👀</Button>
                        <Button variant="dark">Añadir 🛒</Button>
                    </section>
                </Card.Body>
                
        </Card>
      </>
    )
}

export default CardPizza;