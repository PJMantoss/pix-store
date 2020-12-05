import React, {useState, useContext} from "react";
import {appContext} from '../context/appContext';

function Image({className, img}){
    //hover state
    const [hovered, setHovered] = useState(false);

    const {toggleFavorite} = useContext(appContext);
    
    //conditional variables
    const heartIcon = hovered && <i onClick={() => toggleFavorite()} className="ri-heart-line favorite"></i>;
    const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>;

    return(
        <div 
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)} 
            className={`${className} image-container`}
        >
            <img src={img.url} className="image-grid" />
            {heartIcon}
            {cartIcon}
        </div>
    );
}

export default Image;