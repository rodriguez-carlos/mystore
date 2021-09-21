import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Grid } from '@material-ui/core'
import Cart from "../Cart/Cart";
import CartSummary from "../CartSummary/CartSummary";
import { Link } from "react-router-dom";

const CartContainer = () => {
    const { cart, modifyQuantity, removeItem } = useContext(CartContext)
    console.log(cart)
    return (
        <div className="cart-container">
            <h1>Shopping cart</h1>
            {cart.length >= 1 ?
                <Grid container>
                    <Grid item xs={12} sm={9}>
                        <Cart  cart={cart} modifyQuantity={modifyQuantity} removeItem={removeItem}/>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <CartSummary />
                    </Grid>
                </Grid>
                :<Link to="/"><h1>Cart is empty. Click here to fix that!</h1></Link>
            }
        </div>
    )
}

export default CartContainer;