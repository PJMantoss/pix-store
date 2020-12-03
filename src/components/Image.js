import React, {useState} from "react";

function Image({className, img}){
    const [hovered, setHovered] = useState(false);
    return(
        <div className={`${className} image-container`}>
            <img src={img.url} className="image-grid" />
        </div>
    );
}

export default Image;