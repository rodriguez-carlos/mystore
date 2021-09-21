import { CardContent, Grid, CardMedia } from '@material-ui/core';
import Card  from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader';
import { Delete } from '@material-ui/icons';
import ItemCount from '../ItemCount/ItemCount';

const Cart = ({cart, modifyQuantity, removeItem}) => {
    console.log(cart)
    const deleteButton = (item) => {
        removeItem(item)
    }
    return (
        <ul className="cart-list">
            {cart.map(p => <li key={p.item.productId}>
                <Card elevation={5}>
                    <CardHeader title={p.item.productName}/>
                    <CardContent>
                        <Grid container>
                            <Grid item xs={12} sm={9}>
                                <CardMedia className="image-in-cart"
                                    component="img"
                                    image={p.item.image}
                                    height="140"
                                />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <Delete className="delete-button" onClick={removeItem} />
                                <ItemCount 
                                    item={p}
                                    initial={p.quantity}
                                    countInCart={true}
                                    modifyQuantity={modifyQuantity}
                                    removeItem={removeItem}
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
                </li>
            )}       
        </ul>
    )
}

export default Cart;