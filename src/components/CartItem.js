import React from "react";

function CartItem({item}){
    return(
       <div className="cart-item">
           <i className=""></i>
           <img src={item.url} width="130px" />
           <p></p>
       </div>
    )
}

export default CartItem;