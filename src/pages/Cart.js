import React, { useContext, useState } from 'react';
import {AppContext} from "../context/appContext";
import CartItem from "../components/CartItem";

function Cart(){
    const [btnText, setBtnText] = useState("Place Order")
    const {cartItems, emptyCart} = useContext(AppContext);

    const totalCost = 6 * cartItems.length;

    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"});

    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    const placeOrder = () => {
        setBtnText("Ordering...");
        setTimeout(() => {
            console.log("Order Placed!")
            setBtnText("Place Order")
            emptyCart()
        }, 3000);
    }

    return(
        <main className="cart-page">
            <h1>Checkout</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay}</p>
            {
                cartItems.length > 0 ? 
                <div className="order-button">
                    <button onClick={() => placeOrder()}>{btnText}</button>
                </div> :
                <p style={{textAlign: "center"}}>You have no items in your cart!</p>
            }
        </main>
    )
}

export default Cart;