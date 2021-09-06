import ItemCount from '../ItemCount/ItemCount'
import Item from '../Item/Item'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'

const ItemList = ({onAdd, products}) => {
        return (
        <Grid container spacing={3}>
            {products.map((item) => (
                <Grid item xs={3} key={item.productId}>   
                    <Link to={`/product/${item.productId}`}>
                        <Item 
                            title={item.productName}
                            image={item.image}
                            stock={item.productStock}
                            category={item.category}
                        /> 
                    </Link>
                    <ItemCount
                        stock={item.productStock}
                        initial="0"
                        onAdd={onAdd}
                    />
                </Grid>
            ))}
        </Grid>
    )
}

export default ItemList;