import { Box, TextField, Card, CardHeader, Typography } from '@material-ui/core';
import { useContext, useEffect } from 'react'
import { CartContext } from '../../context/CartContext';

const CartSummary = () => {
    const { calculateTotal, orderTotal, cart } = useContext(CartContext)
    useEffect(() => {
        calculateTotal()
    }, [cart, calculateTotal])
    return (
        <Card>
            <CardHeader title="Checkout"/>
            <Box className="purchase-form"
            component="form"
            autoComplete="off"
            >
                <TextField
                    required
                    label="Name"
                    type="text"
                    variant="outlined"
                />
                <TextField
                    required
                    label="Phone"
                    type="number"
                    variant="outlined"
                />
                <TextField
                    required
                    label="Email"
                    type="email"
                    variant="outlined"
                />
                <TextField
                    required
                    label="Confirm email"
                    type="email"
                    variant="outlined"
                />
            </Box>
            <Typography variant="h5">{`Total: ${orderTotal}`}</Typography>
        </Card>
    )
}

export default CartSummary;