import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

function NavBar() {
    const optionsNavBar = [
        {
            option: "Garments",
            path: "/category/garments"
        },
        {
            option: "Ornaments",
            path: "/category/ornaments"
        },
        {
            option: "Contact",
            path: "/contact"
        }
    ]
    const { cart } = useContext(CartContext)
    return (
        <nav className="nav-bar">
            <Link to="/"><img src="https://picsum.photos/200" alt=""/></Link>
            <ul className="nav-bar-options">
                {optionsNavBar.map(opt => <Link to={opt.path}><li key={opt}>{opt.option}</li></Link>)}
                <Link to="/cart"><li><ShoppingCartIcon />{cart.length >=1 ? cart.length : ""}</li></Link>
            </ul>
        </nav>
    );
}

export default NavBar;
