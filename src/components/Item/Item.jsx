import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardHeader from '@material-ui/core/CardHeader'

const Item = ({title, stock, image, category}) => {
    return (
        <Card elevation={5}>
            <CardActionArea>
                <CardMedia 
                    component="img"
                    image={image}
                    title={title}
                    height="160"
                />
                <CardHeader className="item-card-text" title={title} subheader={
                    category === 'ornament' ? 'Ornament' : 'Garment'
                }/>
                
            </CardActionArea>
        </Card>
    )
}

export default Item;
