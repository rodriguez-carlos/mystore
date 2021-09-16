import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const addItem = (item, quantity) => {
        console.log(isInCart(item))
        if(isInCart(item)) {
            const newCart = [...cart]
            let indexInCart = newCart.findIndex(p => p.item.productId === item.productId)
            newCart[indexInCart].quantity = newCart[indexInCart].quantity + quantity
            setCart(newCart)
        } else {
            setCart([...cart, {item, quantity}])
        }
    }
    const isInCart = (item) => {
        return cart.some(p => p.item.productId === item.productId)
    }
    const clearCart = () => {
        setCart([])
    }
    const removeItem = (item) => {
        const newCart = [...cart]
        let indexInCart = newCart.findIndex(p => p.item.productId === item.productId)
        newCart.splice(indexInCart, 1)
        setCart(newCart)
    }

    console.log(cart)
    return (
        <CartContext.Provider value={{ addItem, isInCart, clearCart, removeItem }}>
            {children}
        </CartContext.Provider>
    )
}