import React from 'react';
import Image from '../components/Image';
import {AppContext} from '../context/appContext';
import {getClass} from '../utils';

function Photos(){
    const [allPhotos] = useContext(AppContext);

    const photoData = allPhotos.map((photo, i) => (
        <Image src={photo.id} className={getClass(i)} />
    ))
    return(
        <main className="photos">
            <h1>Images Go here</h1>
        </main>
    )
}

export default Photos;