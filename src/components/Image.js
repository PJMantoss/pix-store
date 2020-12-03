import React, {useState} from "react";

function Image({className, img}){
    //hover state
    const [hovered, setHovered] = useState(false);
    
    //conditional variables
    const heartIcon = hovered && <i className="ri-heart-line favorite"></i>;
    const cartIcon = ;
    return(
        <div 
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)} 
            className={`${className} image-container`}
        >
            <img src={img.url} className="image-grid" />
        </div>
    );
}

export default Image;