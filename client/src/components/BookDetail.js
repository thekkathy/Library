import React from 'react'

const BookDetail = ({match:{params:{bookID, view}}}) => {
    return (
        <div>
            BookDetail
            {bookID}
            {view}
        </div>
    )
}

export default BookDetail
