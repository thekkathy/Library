import React, { useState, createContext } from 'react';
const MyShelfContext = createContext();

export default function MyShelfProvider({ children }) {
    const [myShelf, setMyShelf] = useState([]);

    return <MyShelfContext.Provider value={{ myShelf, setMyShelf }}>
        {children}
    </MyShelfContext.Provider>
}

export { MyShelfContext };