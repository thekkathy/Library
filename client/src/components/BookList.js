import React, { useContext } from 'react'
import { BookResultsListContext } from '../context/bookResultsListContext';
import BookCard from './BookCard';
import NavigateButton from './NavigateButton';

import '../styles/bookList.css';

const BookList = ({ topDescription, searchButtonText }) => {
    const { bookResultsList } = useContext(BookResultsListContext);

    return (
        <div className="my-4">
            <div className="row justify-content-center">
                <div className="h3 font-weight-light">
                    {topDescription}
                </div>
            </div>
            <div className="card content m-4 p-4">
                <div className="row row-cols-1 row-cols-xs-2">
                    {bookResultsList.map(book => {
                        return <BookCard book={book} view="add" />
                    })}
                </div>
            </div>
            <div className="row justify-content-center">
                <NavigateButton buttonName="Search Again" url={`/`}></NavigateButton>
            </div>
        </div>
    )
}

export default BookList
