import React, { useContext, useState } from 'react';
import {AppContext} from "../context/appContext";

function Cart(){
    const {cartItems} = useState(AppContext);

    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    return(
        <main className="cart-page">
            <h1>Checkout</h1>
        </main>
    )
}

export default Cart