import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({title, image, description, price, stock, onAdd}) => {
    return (
        <Card elevation={3} className="card-detail">
            <CardHeader title={title ? title : "Loading"} subheader={description}>
            </CardHeader>
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
                        {title ? <Typography variant="h5">Price:<br />${price}</Typography> : ""}
                        {title ? <ItemCount initial="1" stock={stock} onAdd={onAdd}/> : ""}
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    )
}

export default ItemDetail;