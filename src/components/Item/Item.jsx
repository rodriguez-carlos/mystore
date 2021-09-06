import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardHeader from '@material-ui/core/CardHeader'

const Item = ({title, stock, image, category, description}) => {
    return (
        <CardActionArea>
            <CardHeader title={title} subheader={category}/>
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
