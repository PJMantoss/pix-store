import React, { useContext } from 'react';
import Image from '../components/Image';
import {AppContext} from '../context/appContext';
import {getClass} from '../utils';

function Photos(){
    const [photos] = useContext(AppContext);

    const photosData = allPhotos.map((photo, i) => (
        <Image src={photo.id} img={photo} className={getClass(i)} />
    ))
    return(
        <main className="photos">
            <h1>Images Go here</h1>
            {photosData}
        </main>
    )
}

export default Photos;