import React, { useContext } from 'react'
import { BookResultsListContext } from '../context/bookResultsListContext';
import BookCard from './BookCard';

const BookList = ({ topDescription, searchButtonText }) => {
    const { bookResultsList } = useContext(BookResultsListContext);

    return (
        <div>
            {topDescription}
            <div className="card m-4 p-4">
                <div className="row row-cols-1 row-cols-xs-2">
                    {bookResultsList.map(book => {
                        return <BookCard book={book} view="add" />
                    })}
                </div>
            </div>
        </div>
    )
}

export default BookList
