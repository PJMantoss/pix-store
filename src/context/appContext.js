import React, {createContext, useState, useEffect} from 'react';

const AppContext = createContext();

function AppContextProvider(props){
    const [photos, setPhotos] = useState([]);

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

    useEffect(() => {
        fetch().then().then().catch(err => console.error(err))
    })

    return(
        <AppContext.Provider value={{photos}}>
            {props.children}
        </AppContext.Provider>
    )
};

export {AppContextProvider, AppContext};