import { useState } from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import AddIcon from '@material-ui/icons/Add'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'; 
import RemoveIcon from '@material-ui/icons/Remove'

const ItemCount = ({stock, initial, image, title, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial))
    const incrementCount = () => setCount((count) => count + 1)
    const decrementCount = () => setCount((count) => count - 1)

    return (
        <Card>
            <CardActionArea>
                <Typography variant="subtitle2">{title} (STOCK {stock})</Typography>
                <CardMedia 
                    component="img"
                    image={image}
                    title={title}
                    height="140"
                />
            </CardActionArea>
            <CardActions classes={{ root: "item-count-actions" }}>
                <Button
                    disabled={count <= 0 ? true : false}
                    onClick={decrementCount}
                    color='secondary'
                    variant="contained"
                    size="large"
                ><RemoveIcon /></Button>
                <p>{count}</p>
                <Button
                    disabled={count >= stock ? true : false}
                    onClick={incrementCount}
                    color='primary'
                    variant="contained"
                    size="large"
                ><AddIcon /></Button>
            </CardActions>
            <CardActions classes={{ root: "item-count-actions" }}>
                <Button
                    disabled={count <= 0 ? true : false}
                    onClick={onAdd}
                    fullWidth 
                    variant="contained"
                    endIcon={<AddShoppingCartIcon />}>
                    add to cart
                    </Button>
            </CardActions>
        </Card>
    );
}

export default ItemCount;