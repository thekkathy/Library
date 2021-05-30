import React, { useContext } from 'react';
import BookList from './BookList';
import { BookResultsListContext } from '../context/bookResultsListContext';

const SearchResults = () => {
    const { bookResultsList } = useContext(BookResultsListContext);

    const description = (
        <div>
            <h3 className="font-weight-light">
                Here are some books you can add
            </h3>
        </div>
    )

    return (
        <div>
            <BookList bookList={bookResultsList} topDescription={description} view="add" />
        </div>
    )
}

export default SearchResults
