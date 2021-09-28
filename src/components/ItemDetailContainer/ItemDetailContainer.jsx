import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import {getFirestore} from '../../service/getFirebase'

function ItemDetailContainer() {
    const [product, setProduct] = useState({})
    const { paramId } = useParams()
    useEffect(() => {
        const DBquery = getFirestore().collection('items')
        DBquery.doc(paramId).get()
            .then(data => {
                if(data.exists) {
                    setProduct({productId: data.id, ...data.data()})
                }
                return;
            })
            .catch(e => console.log(e))
        }, [paramId])
    return (
        <div className="item-detail-container">
            <ItemDetail 
                product={product}
            />
        </div>
    )
}

export default ItemDetailContainer
