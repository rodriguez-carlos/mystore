import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
    const optionsNavBar = ["Estimator", "About", "Contact"]
    return (
        <nav className="nav-bar">
            <img src="https://picsum.photos/200" alt=""/>
            <ul className ="nav-bar-options">
                {optionsNavBar.map(opt => <li>{opt}</li>)}
                <li><CartWidget /></li>
            </ul>
        </nav>
    );
}

export default NavBar;
