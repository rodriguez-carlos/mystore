import { Box, TextField, Card, CardHeader, Button } from '@material-ui/core';
import { useContext, useEffect } from 'react'
import { CartContext } from '../../context/CartContext';
import { getFirestore, thisDate} from '../../service/getFirebase'

const CartSummary = ({ formData, setFormData, initialForm, formValid}) => {
    const { calculateTotal, orderTotal, cart, clearCart } = useContext(CartContext)
    const handleChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    } 
    const handleSubmit = (evt) => {
        const newOrder = {
            buyer: {
                name: formData.name,
                phone: formData.phone,
                email: formData.email
            },
            items: cart.map(p => ({id: p.item.productId, title: p.item.productName, price: p.item.productPrice})),
            date: thisDate,
            total: orderTotal
        }
        console.log(newOrder)
        const db = getFirestore()
        const ordersCollection = db.collection('orders')
        ordersCollection.add(newOrder)
            .then(resp => alert(`Your purchase order is: ${resp.id}`))
            .then(() => {
                const itemsCollection = db.collection('items')
                cart.forEach(p => {
                    itemsCollection.doc(p.item.productId).update({
                        productStock: p.item.productStock - p.quantity
                    })
                        .then(resp => console.log(resp))
                        .catch(e => console.log(e))
                })
            })
            .catch(e => console.log(e))
            .finally(() => {
                setFormData(initialForm)
                clearCart()
            })
    }
    useEffect(() => {
        calculateTotal()
    }, [cart, calculateTotal])
    return (
        <Card className="cart-summary">
            <CardHeader title="Checkout"/>
            <Box className="purchase-form"
            component="form"
            autoComplete="off"
            onChange={handleChange}
            >
                <TextField
                    required
                    label="Name"
                    type="text"
                    variant="outlined"
                    name="name"
                />
                <TextField
                    required
                    label="Phone"
                    type="number"
                    variant="outlined"
                    name="phone"
                />
                <TextField
                    required
                    label="Email"
                    type="email"
                    variant="outlined"
                    name="email"
                />
                <TextField
                    required
                    label="Confirm email"
                    type="email"
                    variant="outlined"
                    name="confirmEmail"
                />
                <Button 
                    onClick={handleSubmit}
                    disabled={!formValid}
                    variant="contained"
                    witdh="100%"
                    >Place order
                </Button>
            </Box>
            <CardHeader title={`Total: ${orderTotal}`}></CardHeader>
        </Card>
    )
}

export default CartSummary;