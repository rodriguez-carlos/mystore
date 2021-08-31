import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'


const Item = ({title, stock, image}) => {
    return (
        <CardActionArea>
            <Typography variant="subtitle2">{title} (STOCK {stock})</Typography>
            <CardMedia 
                component="img"
                image={image}
                title={title}
                height="140"
            />
        </CardActionArea>
    )
}

export default Item;
