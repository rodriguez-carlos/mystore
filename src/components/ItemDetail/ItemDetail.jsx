import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({title, image, description, price, stock}) => {
    return (
        <Card elevation={3}>
            <CardHeader title={title} subheader={description}>
            </CardHeader>
            <Grid container>
                <CardContent className="detail-left">
                    <CardMedia 
                        component="img"
                        image={image}
                        height="350"
                    />
                </CardContent>
                <CardContent className="detail-right">
                    <Typography variant="h5">Price:<br />${price}</Typography>
                    <ItemCount initial="1" stock={stock}/>
                </CardContent>
            </Grid>
        </Card>
    )
}

export default ItemDetail;