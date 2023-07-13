import Container from 'react-bootstrap/Container';
import {useState, useEffect} from "react"
import data from '../data/products.json'
import {ItemList} from "../components/ItemList"
import { useParams } from 'react-router-dom';

export const ItemListContainer = props => {
    const [products, setProducts] = useState([])
    const {id} = useParams()

    useEffect(() =>{
        const promesa = new Promise((resolved, rejected) => {
            setTimeout(() => {
                resolved(data)
            }, 2000)
        }) 

        promesa.then(result => {
          if(id) {
            setProducts(result.filter(product => product.category === id))
          }
          else {
            setProducts(result)
          }
        })
    } , [id])

    return (
        <Container>
          <h1>{props.greeting}</h1>
          {products.length === 0 ? (
            <div>Loading...</div>
          ) :  (<ItemList products={products} />) 
          }
        </Container>
      );
}

export default ItemListContainer;