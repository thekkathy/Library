import React, { useContext } from 'react';
import { SelectedBookContext } from '../context/selectedBookContext';
import { MyShelfContext } from '../context/myShelfContext';
import NavigateButton from './NavigateButton';
import '../styles/bookDetail.css'

const BookDetail = ({ match: { params: { bookID, view } } }) => {
    const { selectedBook } = useContext(SelectedBookContext);
    const { setMyShelf } = useContext(MyShelfContext);

    const addToDB = async () => {
        try {
            await fetch(`http://localhost:8000/books/add`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "book": selectedBook })
            })
                .then(
                    resp => {
                        resp.json();
                    }
                )
                .then((obj) => {
                    console.log(obj);
                })
        } catch (error) {
            console.log(error);
        }
    }

    const deleteFromDB = async () => {
        try {
            await fetch(`http://localhost:8000/books/delete`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "book": selectedBook })
            })
                .then(
                    resp => {
                        resp.json();
                    }
                )
                .then((obj) => {
                    console.log(obj);
                })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="card m-4 p-4">
            {console.log(selectedBook)}
            <div className="row">
                <div className="col-7 m-4">
                    <h2>{selectedBook.volumeInfo.title}</h2>
                    {selectedBook.volumeInfo.authors &&
                        selectedBook.volumeInfo.authors.join(", ")}
                    {selectedBook.volumeInfo.averageRating && selectedBook.volumeInfo.ratingsCount &&
                        <p>Rated {selectedBook.volumeInfo.averageRating}/5 by {selectedBook.volumeInfo.ratingsCount} {selectedBook.volumeInfo.ratingsCount === 1 ? 'person' : 'people'}</p>}
                    <p>Categories: {selectedBook.volumeInfo.categories ?
                        selectedBook.volumeInfo.categories.map(category => <span>{category}</span>) : "N/A"}</p>
                    {selectedBook.volumeInfo.description &&
                        <div>
                            <div><em>Description: </em></div>
                            <p>{selectedBook.volumeInfo.description}</p>
                        </div>
                    }
                    {selectedBook.volumeInfo.canonicalVolumeLink && <p>Link To Book: <a href={`${selectedBook.volumeInfo.canonicalVolumeLink}`}>{selectedBook.volumeInfo.canonicalVolumeLink}</a></p>}

                </div>
                <div className="col text-center m-4">
                    {selectedBook.volumeInfo.imageLinks.thumbnail &&
                        <span>
                            <img
                                src={selectedBook.volumeInfo.imageLinks.thumbnail}
                                className="img-thumbnail"
                                width="300"
                                height="auto"
                            />
                        </span>
                    }
                </div>
            </div>
            <div className="row justify-content-center">
                {view === "add" ?
                    <NavigateButton
                        buttonName="Add This Book"
                        url="/my-books"
                        extraOnClick={() => {
                            addToDB();
                        }} /> :
                    <div>
                        <NavigateButton
                            buttonName="Delete Book"
                            url="/my-books"
                            color="danger"
                            extraOnClick={() => {
                                deleteFromDB();
                            }} />
                    </div>
                }
            </div>

            <div className="row justify-content-center">
                <NavigateButton buttonName="Back to My Books" url={`/my-books`}></NavigateButton>
            </div>

        </div>
    )
}

export default BookDetail
