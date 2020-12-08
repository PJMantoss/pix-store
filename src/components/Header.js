import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {AppContext} from "../context/appContext";
import "../App.css"


function Header(){
    const {cartItems} = useContext(AppContext);

    const cartClassName = cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"
   
    return(
        <div>
            <header>
                <Link to="/"><h2>Pix Store</h2></Link>
                <Link to="/cart">
                    <i className={`${cartClassName} ri-fw ri-2x`}></i>
                </Link>
            </header>
        </div>
    )
}

export default Header;