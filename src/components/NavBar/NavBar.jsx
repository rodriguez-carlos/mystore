import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom';

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
    return (
        <nav className="nav-bar">
            <Link to="/"><img src="https://picsum.photos/200" alt=""/></Link>
            <ul className="nav-bar-options">
                {optionsNavBar.map(opt => <Link to={opt.path}><li key={opt}>{opt.option}</li></Link>)}
                <Link to="/cart"><li><CartWidget /></li></Link>
            </ul>
        </nav>
    );
}

export default NavBar;
