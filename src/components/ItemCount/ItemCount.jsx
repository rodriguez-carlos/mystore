import { useContext, useState  } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'; 
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RemoveIcon from '@material-ui/icons/Remove';
import { ThemeProvider } from '@material-ui/core';
import { ThemeContext } from '../../context/ThemeContext';

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
    const {theme} = useContext(ThemeContext)
    if(countInCart === true && count <= 0) removeItem(item.item)

    return (
        <Card>
            <ThemeProvider theme={theme}>
                <CardActions classes={{ root: "item-count-actions" }}>
                    <Button
                        disabled={count <=0 || disableAddAndRemove}
                        onClick={decrementCount}
                        color="primary"
                        variant="contained"
                    ><RemoveIcon /></Button>
                    <p>{count}</p>
                    <Button
                        disabled={count >= stock || disableAddAndRemove}
                        onClick={incrementCount}
                        color="primary"
                        variant="contained"
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
            </ThemeProvider>
        </Card>
    );
}

export default ItemCount;