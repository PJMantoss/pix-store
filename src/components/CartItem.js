import React, {useContext, useState} from "react";
import {AppContext} from "../context/appContext";

function CartItem({item}){
    const {removeFromCart} = useContext(AppContext);
    const [hovered, setHovered] = useState(false);

    const binStyle = hovered ? 
    return(
       <div className="cart-item">
           <i className={} onClick={() => removeFromCart(item.id)}></i>
           <img src={item.url} width="130px" />
           <p>$6.00</p>
       </div>
    )
}

export default CartItem;