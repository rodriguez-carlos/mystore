import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import {getFirestore} from '../../service/getFirebase'

function ItemListContainer ({greeting}) {
    const addToCart = () => console.log('Added to cart')
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()
    useEffect(() => {
        const DBquery = getFirestore().collection('items')
        const queryCondition = (categoryId ? 
                DBquery.where('category', "==", categoryId.slice(0, -1))
            : 
                DBquery)
        queryCondition.get()
            .then(data => {
                if(data.size === 0) {
                    console.log("No products found!")
                }
                setProducts(data.docs.map(p =>({productId: p.id, ...p.data()})))
            })
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