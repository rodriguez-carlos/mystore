import { useState  } from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import { Link } from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'; 
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RemoveIcon from '@material-ui/icons/Remove'

const ItemCount = ({item, stock, initial, onAdd, cartActions, disableAddAndRemove, countInCart, modifyQuantity, removeItem }) => {
    const [count, setCount] = useState(parseInt(initial))
    const incrementCount = () => {
        let newCount = count + 1
        setCount(newCount)
        if(countInCart) modifyQuantity(item.item, newCount)
    }
    const decrementCount = () => {
        let newCount = count - 1
        setCount(newCount)
        if(countInCart) modifyQuantity(item.item, newCount)
    }
    if(countInCart === true && count <= 0) removeItem(item.item)

    return (
        <Card>
            <CardActions classes={{ root: "item-count-actions" }}>
                <Button
                    disabled={count <=0 || disableAddAndRemove}
                    onClick={decrementCount}
                    color='secondary'
                    variant="contained"
                    size="large"
                ><RemoveIcon /></Button>
                <p>{count}</p>
                <Button
                    disabled={count >= stock || disableAddAndRemove}
                    onClick={incrementCount}
                    color='primary'
                    variant="contained"
                    size="large"
                ><AddIcon /></Button>
            </CardActions>
            <CardActions classes={{ root: "item-count-actions" }}>
                {countInCart ? "" 
                :
                    cartActions ? 
                    <div> 
                    <Link to='/cart'>
                        <Button variant="contained" color="primary"><ShoppingCartIcon /></Button>
                    </Link>
                    <Link to='/'>
                        <Button variant="contained" color="primary">Home</Button>
                    </Link> 
                    </div> :
                    <Button
                        disabled={count <= 0}
                        onClick={() => onAdd(count)}
                        fullWidth 
                        variant="contained"
                        endIcon={<AddShoppingCartIcon />}>
                        add to cart
                    </Button>
                }
            </CardActions>
        </Card>
    );
}

export default ItemCount;