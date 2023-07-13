import Container from 'react-bootstrap/Container';
import {useState, useEffect} from "react"
import data from '../data/products.json'
import { ItemDetails } from "./ItemDetails"



export const ItemDetailsContainer = props => {
    const [product, setProduct] = useState([])
    

    useEffect(() =>{
        const promesa = new Promise((resolved, rejected) => {
            setTimeout(() => {
                resolved(data)
            }, 1000)
        }) 

        promesa.then(result => {
          
        setProduct(result[2])
        
        })
    } , [])

    return (
        <Container>
          <h1 className='title-details'>Detalles del producto</h1>
          {product.length === 0 ? (
            <div>Loading...</div>
          ) :  (<ItemDetails product={product} />) 
          }
        </Container>
      );
}

export default ItemDetailsContainer;