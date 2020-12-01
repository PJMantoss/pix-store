import React, {createContext, useState, useEffect} from 'react';

const AppContext = createContext();

function AppContextProvider(props){
    const [photos, setPhotos] = useState([]);

    const url = "";

    return(
        <AppContext.Provider value={{photos}}>
            {props.children}
        </AppContext.Provider>
    )
};

export {AppContextProvider, AppContext};