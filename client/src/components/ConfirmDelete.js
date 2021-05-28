import React from 'react'

const ConfirmDelete = ({match:{params:{bookID}}}) => {
    return (
        <div>
            ConfirmDelete
            {bookID}
        </div>
    )
}

export default ConfirmDelete
