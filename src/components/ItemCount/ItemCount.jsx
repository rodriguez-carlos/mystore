import { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

const ItemCount = () => {
    const stock = 8
    const [count, setCount] = useState(0)
    const incrementCount = () => setCount((count) => count + 1)
    const decrementCount = () => setCount((count) => count - 1)

    return (
        <Card>
            <CardActionArea>
                <Typography>ITEM NAME (STOCK {stock})</Typography>
            </CardActionArea>
            <CardActions>
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
        </Card>
    );
}

export default ItemCount;