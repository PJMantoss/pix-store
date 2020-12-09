import React, {useContext, useState} from "react";
import {AppContext} from "../context/appContext";
import useHover from "../hooks/useHover";
import PropTypes from "prop-types";

function CartItem({item}){
    const {removeFromCart} = useContext(AppContext);
    const [hovered, ourRef] = useHover()
    // const [hovered, setHovered] = useState(false);

    const binStyle = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"
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

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem;