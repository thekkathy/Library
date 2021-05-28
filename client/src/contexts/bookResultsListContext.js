import React, { useState, createContext } from 'react';
const BookResultsListContext = createContext();

export default function BookResultsListProvider({ children }) {
    const [bookResultsList, setBookResultsList] = useState([]);

    return <BookResultsListContext.Provider value={{ bookResultsList, setBookResultsList }}>
        {children}
    </BookResultsListContext.Provider>
}

export { BookResultsListContext };