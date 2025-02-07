import {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Pizza = () => {

    //guardar resultados de la api
    const [pizzita, setPizzita] = useState([])
    const [ingredientes, setIngredientes] = useState([])
    const {id} = useParams();

    //useEffect para llamar a la api
    useEffect( () => {
        consultarApi();
    },[]);

    const consultarApi = async () => {
        const url = "http://localhost:5000/api/pizzas/"+  id ;
        // console.log(id)
        const response = await fetch(url);
        const data = await response.json();
        data.name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
        setIngredientes(data.ingredients);
        setPizzita(data);
    }
    //

    return (
        <div className='pizza-cards'>
            <Card className="text-center card2">
                <Card.Header as="h3">{pizzita.name}</Card.Header>
                <Card.Img variant="top" src={pizzita.img} alt={pizzita.desc} />
                <Card.Body>
                    <Card.Title>{pizzita.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{pizzita.desc}</Card.Subtitle>
                    <Card.Text as='h5'>
                    Ingredientes
                    </Card.Text>
                    <ListGroup>
                        {
                            ingredientes.map(
                                    (item) => {return (
                                        <ListGroup.Item key={item}>{item}</ListGroup.Item>
                                    )})        
                        }
                    </ListGroup>
                </Card.Body>
                <Card.Footer>${pizzita.price}</Card.Footer>
            </Card>
        </div>
    );

}
export default Pizza;
