import React, { useEffect } from 'react'
import NavigateButton from './NavigateButton';

const BookCard = ({book, view}) => {

    const truncate = (str, numWords) => {
        let truncated = str.split(" ").splice(0, numWords).join(" ");
        return truncated + "..."
    }

    useEffect(() => {
        console.log(book);
    }, [])

    return (
        <div className="col">
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
                    {book.volumeInfo.authors && book.volumeInfo.authors.map(author => <span>{author}</span>)}
                    <p className="mt-4">{book.volumeInfo.description && truncate(book.volumeInfo.description, 15)}</p>
                </div>
                <NavigateButton buttonName="View Book" url={`/book/${book.id}/${view}`}></NavigateButton>
            </div>
        </div>
    )
}

export default BookCard
