import React from 'react'

import BookCard from './BookCard';
import NavigateButton from './NavigateButton';

import '../styles/bookList.css';

const BookList = ({ bookList, topDescription, view }) => {

    return (
        <div className="my-4">
            <div className="row justify-content-center">
                    {topDescription}
            </div>
            <div className="card content m-4 p-4">
                <div className="row row-cols-1 row-cols-xs-2">
                    {bookList.length !== 0 ? bookList.map(book => {
                        return <div>
                            {view === "add" ? 
                            <BookCard book={book} view={view} /> : 
                            <BookCard book={book.book} view={view} />
                        }
                        </div>
                    }) :
                        <div className="m-4">No books to display</div>
                    }
                </div>
            </div>
            <div className="row justify-content-center">
                {view === "add" ?
                    <NavigateButton buttonName="Search Again" url={`/`}></NavigateButton> :
                    <NavigateButton buttonName="Add Another Book" url={`/`}></NavigateButton>
                }
            </div>
        </div>
    )
}

export default BookList
