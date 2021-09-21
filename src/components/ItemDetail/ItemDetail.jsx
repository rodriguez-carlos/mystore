import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ product }) => {
    const { productName, image, productDescription, productPrice, productStock } = product
    const [cartActions, setCartActions] = useState(false)
    const [disableAddAndRemove, setDisableAddAndRemove] = useState(false)
    const { addItem } = useContext(CartContext)
    const addToCart = (count) => {
        addItem(product, count)
        console.log(`Added ${count} unit(s) to cart.`)
        setCartActions(true)
        setDisableAddAndRemove(true)
    }
    return (
        <Card elevation={3} className="card-detail">
            <CardHeader title={productName ? productName : "Loading"} subheader={productDescription} />
            <Grid container className="card-detail-content">
                <Grid item>
                    <CardContent className="detail-left">
                        <CardMedia 
                            component="img"
                            image={image}
                            height="350"
                        />
                    </CardContent>
                </Grid>
                <Grid item>
                    <CardContent className="detail-right">
                        {productName ? <Typography variant="h5">Price:<br />${productPrice}</Typography> : ""}
                        {productName ? 
                            <ItemCount 
                            initial="1" 
                            stock={productStock} 
                            onAdd={addToCart}
                            cartActions={cartActions}
                            disableAddAndRemove={disableAddAndRemove}
                            /> : ""
                        }
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    )
}

export default ItemDetail;