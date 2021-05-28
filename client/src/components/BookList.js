import React from 'react'

const BookList = ({bookList, topDescription, searchButtonText}) => {
    return (
        <div>
            BooksList
            {bookList}
            {topDescription}
            {searchButtonText}
        </div>
    )
}

export default BookList
