import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add';
import ItemCount from '../ItemCount/ItemCount'

function ItemListContainer ({greeting}) {
    return (
        <div className ="item-list-container">
            <h1>{greeting}</h1>
            <ItemCount />
        </div>
    );
}

export default ItemListContainer;