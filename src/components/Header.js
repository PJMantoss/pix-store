import React from "react";
import {Link} from "react-router-dom";


function Header(){
    return(
        <div>
            <header>
                <Link to="/"><h2>Pix Store</h2></Link>
                <Link to="/cart">
                    <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
                </Link>
            </header>
        </div>
    )
}

export default Header;