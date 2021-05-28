import React, { useState, createContext } from 'react';
const SelectedBookContext = createContext();

export default function SelectedBookProvider({ children }) {
    const [selectedBook, setSelectedBook] = useState({});

    return <SelectedBookContext.Provider value={{ selectedBook, setSelectedBook }}>
        {children}
    </SelectedBookContext.Provider>
}

export { SelectedBookContext };