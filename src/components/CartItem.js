import React, {useContext} from "react";
import {AppContext} from "../context/appContext";

function CartItem({item}){
    return(
       <div className="cart-item">
           <i className="ri-delete-bin-line"></i>
           <img src={item.url} width="130px" />
           <p>$6.00</p>
       </div>
    )
}

export default CartItem;