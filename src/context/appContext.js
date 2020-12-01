import React, {createContext, useState} from 'react';

const AppContext = createContext();

function AppContextProvider(props){
    const [photos, setPhotos] = useState([]);
    return(
        <AppContext.Provider value="">
            {props.children}
        </AppContext.Provider>
    )
};

export {AppContextProvider, AppContext};