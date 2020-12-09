import React, {useContext, useState} from "react";
import {AppContext} from "../context/appContext";

function CartItem({item}){
    const {removeFromCart} = useContext(AppContext);
    const [hovered, setHovered] = useState(false);

    const binStyle = hovered ? "ri-delete-bin-line" : "ri-delete-bin-fill"
    return(
       <div className="cart-item">
           <i 
               className={binStyle} 
               onMouseEnter={() => setHovered(true)} 
               onMouseLeave={() => setHovered(false)} 
               onClick={() => removeFromCart(item.id)}
            ></i>
           <img src={item.url} width="130px" alt="selected-pictures"/>
           <p>$6.00</p>
       </div>
    )
}

export default CartItem;