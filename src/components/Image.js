import React, {useState, useContext} from "react";
import PropTypes from 'prop-types';
import {AppContext} from '../context/appContext';

function Image({className, img}){
    //hover state
    const [hovered, setHovered] = useState(false);

    const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(AppContext);
    
    //conditional variables
    const heartIcon = () => {
        if(hovered){
            return <i onClick={() => toggleFavorite(img.id)} className="ri-heart-line favorite"></i>;
        }else if(img.isFavorite){
            return <i onClick={() => toggleFavorite(img.id)} className="ri-heart-fill favorite"></i>
        } else {
            return null;
        }
    }

    const cartIcon = () => {
        const alreadyInCart = cartItems.some(item => item.id === img.id)
        if(hovered){
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
        } else if(alreadyInCart){
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img)}></i>
        } else {
            return null;
        }
    }

    return(
        <div 
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)} 
            className={`${className} image-container`}
        >
            <img src={img.url} className="image-grid" alt="picture-of-an-object" />
            {heartIcon()}
            {cartIcon()}
        </div>
    );
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image;