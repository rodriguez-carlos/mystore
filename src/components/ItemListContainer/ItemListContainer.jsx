import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import productsList from '../../assets/datamock'
import {getFirestore} from '../../service/getFirebase'

let fakeApiCall = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(getProducts(categoryId))
        }, 500)
    })
}

const db = getFirestore()
const itemCollection = db.collection('items')
itemCollection.get()
    .then(resp => console.log(resp))

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
            .then((res) => { setProducts(res) })
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