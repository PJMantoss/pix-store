import React, {useContext} from "react";
import {Link} from "react-router-dom";
import "../App.css"


function Header(){
    const cartIcon = img => {
        if(img){
            return <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
        }else if(!img){
            return <i className="ri-shopping-cart-fill ri-fw ri-2x"></i>
        }
    }
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