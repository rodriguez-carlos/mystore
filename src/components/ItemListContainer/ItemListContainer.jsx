import { useState, useEffect } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import productsList from '../../assets/datamock'
import Grid from '@material-ui/core/Grid'



function ItemListContainer ({greeting}) {
    const addToCart = () => console.log('Added to cart')
    const [products, setProducts] = useState([])
    useEffect(() => {
        setTimeout(() => {
            setProducts(productsList)
        }, 2000)   
    }, [])
    return (
        <div className="item-list-container">
            <h1>{greeting}</h1>
            <Grid container spacing={3}>
                {products.map((item) => (
                    <Grid item xs={3}>    
                        <ItemCount 
                            key={item.productId}
                            stock={item.productStock}
                            initial="0"
                            title={item.productName}
                            image={item.image}
                            onAdd={addToCart}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default ItemListContainer;