import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {AppContext} from "../context/appContext";
import "../App.css"


function Header(){
    const {cartItems} = useContext(AppContext);

    const cartClassName = cartItems.length > 0 ? <i className="ri-shopping-cart-fill ri-fw ri-2x"></i> :
   
    return(
        <div>
            <header>
                <Link to="/"><h2>Pix Store</h2></Link>
                <Link to="/cart">
                    {cartIcon()}
                </Link>
            </header>
        </div>
    )
}

export default Header;