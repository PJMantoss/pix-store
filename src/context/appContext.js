import React, {createContext, useState, useEffect} from 'react';

const AppContext = createContext();

function AppContextProvider(props){
    const [photos, setPhotos] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    const addToCart = newItem => {
        
    }

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

    useEffect(() => {
        fetch(url)
          .then(res => res.json())
          .then(data => setPhotos(data))
          .catch(err => console.error(err))
    }, [])

    const toggleFavorite = id => {
        const updatedArr = photos.map(photo => {
            if(photo.id === id){
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo;
        })

        setPhotos(updatedArr)
    }

    return(
        <AppContext.Provider value={{photos, toggleFavorite}}>
            {props.children}
        </AppContext.Provider>
    )
};

export {AppContextProvider, AppContext};