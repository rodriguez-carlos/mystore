import Item from '../Item/Item'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'

const ItemList = ({products}) => {
        return (
        <Grid container spacing={3}>
            {products.map((item) => (
                <Grid item xs={12} sm={6} md={3} key={item.productId}>   
                    <Link to={`/product/${item.productId}`}>
                        <Item 
                            title={item.productName}
                            image={item.image}
                            stock={item.productStock}
                            category={item.category}
                        /> 
                    </Link>
                </Grid>
            ))}
        </Grid>
    )
}

export default ItemList;