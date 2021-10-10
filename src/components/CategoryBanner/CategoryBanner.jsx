import { useParams } from 'react-router-dom'
import { Typography } from '@material-ui/core';
import dezignerBanner from '../../assets/dezigner-banner.png'

const CategoryBanner = ({greeting}) => {
    const { categoryId } = useParams()
    console.log(categoryId)
    return (
        <div className="category-banner">
            <img src={dezignerBanner} alt="" />
            <Typography className="banner-title" variant="h3">{greeting ? greeting : (categoryId === "garments" ? "Garments" : "Ornaments")}</Typography>
        </div>
    )
}

export default CategoryBanner;