
import Button from 'react-bootstrap/Button';

export const ItemDetails = ({ product }) => {
  return (
    <>
      <div className="main">
        <div className="left">
          <img
            className="img-product"
            src={product.img}
            alt={product.img}
          ></img>
        </div>

        <div className="right">
          <div className="title">{product.name}</div>
          <p className="description">{product.description}</p>
          <div className="price">$ {product.price}</div>
          <Button className="btn" variant="dark">Agregar</Button>
        </div>
       
      </div>
    </>
  );
};
