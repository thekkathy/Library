import React, { useEffect, useContext } from 'react'
import NavigateButton from './NavigateButton';
import { SelectedBookContext } from '../context/selectedBookContext';

const BookCard = ({book, view}) => {
    const { setSelectedBook } = useContext(SelectedBookContext);

    const truncate = (str, numWords) => {
        let truncated = str.split(" ").splice(0, numWords).join(" ");
        return truncated + "..."
    }

    return (
        <div className="col" key={book.id}>
            <div
                className="card my-4 p-4 text-center"
                style={{ width: "28rem", height: "36rem" }}
            >
                {book.volumeInfo.imageLinks &&
                    <span className="text-success">
                        <img src={book.volumeInfo.imageLinks.smallThumbnail} className="img-thumbnail" />
                    </span>

                }
                <h5 className="card-title m-4">
                    {book.volumeInfo.title}
                </h5>
                <div className="card-text">
                    {book.volumeInfo.authors && book.volumeInfo.authors.join(", ")}
                    <p className="mt-4">{book.volumeInfo.description && truncate(book.volumeInfo.description, 15)}</p>
                </div>
                <NavigateButton 
                buttonName="View Book" 
                url={`/book/${book.id}/${view}`}
                extraOnClick={() => {
                    setSelectedBook(book);
                }}
                >
                </NavigateButton>
            </div>
        </div>
    )
}

export default BookCard
