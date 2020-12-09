import React, {useContext} from "react";
import {AppContext} from "../context/appContext";

function CartItem({item}){
    const {removeFromCart} = useContext(AppContext);
    return(
       <div className="cart-item">
           <i className="ri-delete-bin-line" onClick={() => removeFromCart(item.id)}></i>
           <img src={item.url} width="130px" />
           <p>$6.00</p>
       </div>
    )
}

export default CartItem;