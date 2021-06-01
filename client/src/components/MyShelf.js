import React, { Fragment, useContext, useEffect } from 'react';
import BookList from './BookList';
import { MyShelfContext } from '../context/myShelfContext';

const MyShelf = () => {
    const { myShelf, setMyShelf } = useContext(MyShelfContext);
    const description = (
        <Fragment>
            <div className="text-center">
                <h3 className="font-weight-light">
                    My books
                </h3>
                <p>
                    <div>This is your magnifacent collection of books.</div>
                    <div>Click on "View Book" to admire a book or delete it if you don't want it in your colelction anymore.</div>
                </p>
            </div>
        </Fragment>
    )

    useEffect(async () => {
        try {
            await fetch(`http://localhost:8000/books/get`)
                .then(
                    resp => { return resp.json() }
                )
                .then((obj) => {
                    if (obj.length === 0) {
                        setMyShelf([]);
                    }
                    else {
                        setMyShelf(obj);
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <div>
            <BookList bookList={myShelf} topDescription={description} view="delete" />
        </div>
    )
}

export default MyShelf
