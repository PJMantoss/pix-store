import React, {useState, useContext} from "react";
import {AppContext} from '../context/appContext';

function Image({className, img}){
    //hover state
    const [hovered, setHovered] = useState(false);

    const {toggleFavorite} = useContext(AppContext);
    
    //conditional variables
    const heartIcon = () => {
        if(hovered){
            return <i onClick={() => toggleFavorite(img.id)} className="ri-heart-line favorite"></i>;
        }else if(img.isFavorite){
            return <i onClick={() => toggleFavorite(img.id)} className="ri-heart-line favorite"></i>
        } else {
            return null;
        }
    }

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