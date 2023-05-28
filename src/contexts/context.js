import React, { useState } from "react";

export const ContextContext = React.createContext({});

export const ContextProvider = (props) => {
    const [city, setCity] = useState();

    return (
        <ContextContext.Provider value={{ city, setCity}}>
            {props.children}
        </ContextContext.Provider>
    )
}

export const useContexto = () => React.useContext(ContextContext)