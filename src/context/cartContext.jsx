import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])
    const [orderTotal, setOrdertotal] = useState(0)

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])
    
    const addItem = (item, quantity) => {
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
    const modifyQuantity = (item, newQuantity) => {
        const newCart = [...cart]
        let indexInCart = newCart.findIndex(p => p.item.productId === item.productId)
        newCart[indexInCart].quantity = newQuantity
        setCart(newCart)
    }
    const calculateTotal = () => {
        let totalsPerItem = cart.map(p => p.item.productPrice * p.quantity)
        let totalInCart = totalsPerItem.reduce((a,b) => a + b, 0)
        console.log(totalsPerItem, totalInCart)
        setOrdertotal(totalInCart)
    }
    const totalItemsInCart = () => {
        let quantitiesArray = cart.map (p => p.quantity)
        return quantitiesArray.reduce((a,b) => a + b)
    }

    return (
        <CartContext.Provider value={{ 
            addItem, 
            isInCart, 
            clearCart, 
            removeItem, 
            modifyQuantity, 
            calculateTotal, 
            totalItemsInCart,
            orderTotal,
            cart }}>
            {children}
        </CartContext.Provider>
    )
}