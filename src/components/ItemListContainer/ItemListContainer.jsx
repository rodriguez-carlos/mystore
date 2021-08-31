import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import productsList from '../../assets/datamock'

let fakeApiCall = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Calling fake API")
            resolve(productsList)
        }, 2000)
    })
}
    
function ItemListContainer ({greeting}) {
    const addToCart = () => console.log('Added to cart')
    const [products, setProducts] = useState([])
    useEffect(() => {
        fakeApiCall()
            .then((res) => { console.log(res); setProducts(res) })
            .catch(e => console.log(e))
    }, [])
    return (
        <div className="item-list-container">
            <h1>{greeting}</h1>
            <ItemList 
                onAdd={addToCart}
                products={products}
            />
        </div>
    );
}

export default ItemListContainer;