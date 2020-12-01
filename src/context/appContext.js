import React, {createContext, useState} from 'react';

const AppContext = createContext();

function AppContextProvider(props){
    const [photos, setPhotos] = useState([]);
    return(
        <AppContext.Provider value={{photos}}>
            {props.children}
        </AppContext.Provider>
    )
};

export {AppContextProvider, AppContext};