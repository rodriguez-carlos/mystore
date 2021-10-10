import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { getFirestore } from '../../service/getFirebase'
import CategoryBanner from '../CategoryBanner/CategoryBanner'

function ItemListContainer ({greeting}) {
    const addToCart = () => console.log('Added to cart')
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()
    console.log(categoryId)
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
        <div>
            <CategoryBanner greeting={greeting}/>
            <div className="item-list-container">
                {products ? <ItemList 
                    onAdd={addToCart}
                    products={products}
                /> : <p>Loading</p>}
            </div>
        </div>
    );
}

export default ItemListContainer;