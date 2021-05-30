import React, { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import SearchBooks from './SearchBooks';
import BookList from './BookList';
import BookDetail from './BookDetail';
import Load from './Load';
import ConfirmDelete from "./ConfirmDelete";
import MyShelf from './MyShelf';

import { BookResultsListContext } from '../context/bookResultsListContext';
import { MyShelfContext } from '../context/myShelfContext';

const Routing = () => {
    const { bookResultsList } = useContext(BookResultsListContext);
    const { myShelf, setMyShelf } = useContext(MyShelfContext);

    return (
        <div>
            <Router>
                {/* NAVBAR */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">
                        <i class="fas fa-book"></i> Bookshelf
        </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Search Books</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/my-books">My Books</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Switch>
                    <Route path="/" exact component={SearchBooks} />
                    <Route
                        path="/my-books/"
                        exact component={MyShelf}
                    />
                    <Route
                        path="/search-results/"
                        exact render={(props) => (
                            <BookList {...props} bookList={bookResultsList} topDescription={"Here are some books you can add"} view="add" />
                        )}
                    />
                    <Route path="/loading" exact component={Load} />
                    <Route path="/book/:bookID/:view" exact component={BookDetail} />
                    <Route path="/confirm-delete/:bookID" exact component={ConfirmDelete} />
                </Switch>
            </Router>
        </div>
    )
}

export default Routing
