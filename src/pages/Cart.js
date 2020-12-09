import React, { useContext, useState } from 'react';
import {AppContext} from "../context/appContext";
import CartItem from "../components/CartItem";

function Cart(){
    const {cartItems} = useContext(AppContext);

    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    return(
        <main className="cart-page">
            <h1>Checkout</h1>
            {cartItemElements}
            <p className="total-cost">Total: </p>
            <div className="order-button">
                <button>Place Order</button>
            </div>
        </main>
    )
}

export default Cart;