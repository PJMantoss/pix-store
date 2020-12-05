import React, { useContext } from 'react';
import Image from '../components/Image';
import {AppContextProvider} from '../context/appContext';
import {getClass} from '../utils';

function Photos(){
    const {photos} = useContext(AppContext);

    const photosData = photos.map((photo, i) => (
        <Image key={photo.id} img={photo} className={getClass(i)} />
    ))
    
    return(
        <main className="photos">
            {photosData}
        </main>
    )
}

export default Photos;