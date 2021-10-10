import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Grid, Button } from '@material-ui/core'
import Cart from "../Cart/Cart";
import CartSummary from "../CartSummary/CartSummary";
import { Link } from "react-router-dom";
import CategoryBanner from "../CategoryBanner/CategoryBanner";

const CartContainer = ({greeting}) => {
    const { cart, modifyQuantity, removeItem } = useContext(CartContext)
    console.log(useContext(CartContext))
    const initialForm = {
        name: "",
        phone: "",
        email: "",
        confirmEmail: ""
    }
    const [formData, setFormData] = useState(initialForm)
    const [formValid, setFormValid] = useState(false)
    useEffect(() => {
        setFormValid(
            !!(formData.name && formData.phone && formData.email && formData.confirmEmail
            && formData.confirmEmail === formData.email)
        )
    }, [formData])
    console.log(cart)
    return (
        <div className="cart-container">
            <CategoryBanner greeting={greeting} />
            {cart.length >= 1 ?
                <Grid container>
                    <Grid item xs={12} sm={8}>
                        <Cart  cart={cart} modifyQuantity={modifyQuantity} removeItem={removeItem}/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <CartSummary 
                            formData={formData} 
                            setFormData={setFormData} 
                            formValid={formValid}
                            initialForm={initialForm}/>
                    </Grid>
                </Grid>
                :<><h3>Whoops! Your cart is empty</h3><Link to="/"><Button variant="contained">back home</Button></Link></>
            }
        </div>
    )
}

export default CartContainer;