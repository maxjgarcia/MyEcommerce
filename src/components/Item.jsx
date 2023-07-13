import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Alert from "./Alert"

export const Item = ({product}) => {
    

    return (
      <Card style={{ width: '20rem' }}
      key={product.id}
      className="float-start">
        <Card.Img variant="top" src={product.img} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
           $ {product.price}
          </Card.Text>
          <Link to={`/item/${product.id}`}>
          <Button variant="primary">Detalles</Button>
          </Link>
         
        </Card.Body>         
      </Card>
    );
}


  export default Item;