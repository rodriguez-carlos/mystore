import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom';

function NavBar() {
    const optionsNavBar = ["Estimator", "About", "Contact"]
    return (
        <nav className="nav-bar">
            <Link to="/"><img src="https://picsum.photos/200" alt=""/></Link>
            <ul className ="nav-bar-options">
                {optionsNavBar.map(opt => <Link to={`/${opt.toLowerCase()}`}><li key={opt}>{opt}</li></Link>)}
                <li><CartWidget /></li>
            </ul>
        </nav>
    );
}

export default NavBar;
