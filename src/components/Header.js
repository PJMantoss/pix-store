import React from "react";
import {Link} from "react-router-dom";
import "../App.css"


function Header(){
    const cartIcon = img => {
        if(img){
            return 
        }else if(){}
    }
    return(
        <div>
            <header>
                <Link to="/"><h2>Pix Store</h2></Link>
                <Link to="/cart">
                    {}
                </Link>
            </header>
        </div>
    )
}

export default Header;