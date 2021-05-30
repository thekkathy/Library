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
                <p>This is your magnifacent shelf. Click on "View Book" to view it or delete it.</p>
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
    }, [myShelf]);

    return (
        <div>
            <BookList bookList={myShelf} topDescription={description} view="delete" />
        </div>
    )
}

export default MyShelf
