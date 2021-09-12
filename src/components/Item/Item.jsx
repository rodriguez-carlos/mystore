import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardHeader from '@material-ui/core/CardHeader'

const Item = ({title, stock, image, category, description}) => {
    return (
        <Card elevation={5}>
            <CardActionArea>
                <CardHeader title={title} subheader={category}/>
                <CardMedia 
                    component="img"
                    image={image}
                    title={title}
                    height="140"
                />
            </CardActionArea>

        </Card>
    )
}

export default Item;
