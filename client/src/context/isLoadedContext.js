import React, { useState, createContext } from 'react';
const IsLoadedContext = createContext();

export default function IsLoadedProvider({ children }) {
    const [isLoaded, setIsLoaded] = useState(false);

    return <IsLoadedContext.Provider value={{ isLoaded, setIsLoaded }}>
        {children}
    </IsLoadedContext.Provider>
}

export { IsLoadedContext };