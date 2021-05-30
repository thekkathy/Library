import React, { useContext, useEffect } from 'react';
import BookList from './BookList';
import { MyShelfContext } from '../context/myShelfContext';

const MyShelf = () => {
    const { myShelf, setMyShelf } = useContext(MyShelfContext);

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
            <BookList bookList={myShelf} topDescription={"My books"} view="delete" />
        </div>
    )
}
// <BookList bookList={myShelf} topDescription={"My books"} view="delete" />

export default MyShelf
