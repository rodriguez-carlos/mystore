import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import productsList from '../../assets/datamock'

let fakeApiCall = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Calling fake API")
            resolve(getProducts(categoryId))
        }, 2000)
    })
}

function getProducts (categoryId) {
    if(categoryId) {
        return productsList.filter(p => p.category.toLowerCase() === categoryId.slice(0, -1)) //Slice removes the S that I want in the route and navbar
    } else {
        return productsList
    }
}

function ItemListContainer ({greeting}) {
    const addToCart = () => console.log('Added to cart')
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()
    useEffect(() => {
        setProducts([])
        fakeApiCall(categoryId)
            .then((res) => { console.log(res); setProducts(res) })
            .catch(e => console.log(e))
    }, [categoryId])
    return (
        <div className="item-list-container">
            <h1>{greeting ? greeting : (categoryId === "garments" ? "Garments" : "Ornaments")}</h1>
            {products ? <ItemList 
                onAdd={addToCart}
                products={products}
            /> : <p>Loading</p>}
        </div>
    );
}

export default ItemListContainer;