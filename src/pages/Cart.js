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
        </main>
    )
}

export default Cart;