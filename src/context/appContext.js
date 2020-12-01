import React, {createContext} from 'react';

const AppContext = createContext();

function AppContextProvider(){
    return(
        <Provider value="">
            {}
        </Provider>
    )
};

export default {AppContextProvider, AppContext};