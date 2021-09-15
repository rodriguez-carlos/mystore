import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import productsList from '../../assets/datamock'
import ItemDetail from '../ItemDetail/ItemDetail'

console.log(productsList)
let fakeApiCall = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Calling fake API")
            resolve(getProduct(id))
        }, 2000)
    })
}

function getProduct(id) {
    return productsList.find(p => p.productId === id)
}

function ItemDetailContainer() {
    const [product, setProduct] = useState({})
    const { paramId } = useParams()
    useEffect(() => {
        fakeApiCall(paramId)
            .then((res) => { console.log(res); setProduct(res) })
            .catch(e => console.log(e))
        }, [paramId])
    return (
        <div className="item-detail-container">
            <ItemDetail 
                title={product.productName}
                image={product.image}
                stock={product.productStock}
                category={product.category}
                price={product.productPrice}
                description={product.productDescription}
            />
        </div>
    )
}

export default ItemDetailContainer
