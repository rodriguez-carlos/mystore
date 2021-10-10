import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useMediaQuery, Toolbar, Typography } from '@material-ui/core';
import dezignerLogo from "../../assets/dezigner-logo.png"
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import CartWidget from '../CartWidget/CartWidget';

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
    const { cart, totalItemsInCart } = useContext(CartContext)
    return (
        <Toolbar className="nav-bar">
            <Link to="/"><img src={dezignerLogo} alt=""/></Link>
            <ul className="nav-bar-options">
                {optionsNavBar.map(opt => <Link to={opt.path}><li key={opt}><Typography variant="h5">{opt.option}</ Typography></li></Link>)}
                <Link to="/cart"><li><CartWidget />{cart.length > 0 ? totalItemsInCart() : ""}</li></Link>
            </ul>
        </Toolbar>
    );
}

export default NavBar;
