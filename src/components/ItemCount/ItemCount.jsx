import { useState } from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import { Link } from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'; 
import RemoveIcon from '@material-ui/icons/Remove'

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial))
    const [cartActions, setCartActions] = useState(false)
    const [disableAddAndRemove, setDisableAddAndRemove] = useState(false)
    const incrementCount = () => setCount((count) => count + 1)
    const decrementCount = () => setCount((count) => count - 1)
    const addToCartAction = () => {
        onAdd()
        setCartActions(true)
        setDisableAddAndRemove(true)
    }


    return (
        <Card>
            <CardActions classes={{ root: "item-count-actions" }}>
                <Button
                    disabled={count <= 0 ? true : false}
                    disabled={disableAddAndRemove}
                    onClick={decrementCount}
                    color='secondary'
                    variant="contained"
                    size="large"
                ><RemoveIcon /></Button>
                <p>{count}</p>
                <Button
                    disabled={count >= stock ? true : false}
                    disabled={disableAddAndRemove}
                    onClick={incrementCount}
                    color='primary'
                    variant="contained"
                    size="large"
                ><AddIcon /></Button>
            </CardActions>
            <CardActions classes={{ root: "item-count-actions" }}>
                {
                    cartActions ? 
                    <div> 
                    <Link to='/cart'>
                        <Button variant="contained" color="primary"><AddShoppingCartIcon /></Button>
                    </Link>
                    <Link to='/'>
                        <Button variant="contained" color="primary">Home</Button>
                    </Link> 
                    </div> :
                    <Button
                        disabled={count <= 0 ? true : false}
                        onClick={addToCartAction}
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