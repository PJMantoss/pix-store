import React, { useContext, useState } from 'react';
import {AppContext} from "../context/appContext";
import CartItem from "../components/CartItem";

function Cart(){
    const [btnText, setBtnText] = useState()
    const {cartItems, emptyCart} = useContext(AppContext);

    const totalCost = 6 * cartItems.length;

    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"});

    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    return(
        <main className="cart-page">
            <h1>Checkout</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay}</p>
            <div className="order-button">
                <button>Place Order</button>
            </div>
        </main>
    )
}

export default Cart;