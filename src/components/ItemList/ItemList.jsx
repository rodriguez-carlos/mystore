import { useState, useEffect } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import Item from '../Item/Item'
import Grid from '@material-ui/core/Grid'
import productsList from '../../assets/datamock'

let fakeApiCall = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Calling fake API")
            resolve(productsList)
        }, 2000)
        // reject('Call to fake API failed')
    })
}
const ItemList = () => {
    const addToCart = () => console.log('Added to cart')
    const [products, setProducts] = useState([])
    useEffect(() => {
        fakeApiCall()
            .then((res) => { console.log(res); setProducts(res) })
            .catch(e => console.log(e))
    }, [])
    return (
        <Grid container spacing={3}>
            {products.map((item) => (
                <Grid item xs={3} key={item.productId}>   
                    <Item 
                        title={item.productName}
                        image={item.image}
                        stock={item.productStock}
                    /> 
                    <ItemCount
                        stock={item.productStock}
                        initial="0"
                        onAdd={addToCart}
                    />
                </Grid>
            ))}
        </Grid>
    )
}

export default ItemList;