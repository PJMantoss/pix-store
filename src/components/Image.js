import React, {useState} from "react";

function Image({className, img}){
    //hover state
    const [hovered, setHovered] = useState(false);
    
    //conditional variables
    const heartIcon = hovered && <i className="ri-heart-line favorite"></i>;
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