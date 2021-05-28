import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import SearchBooks from './components/SearchBooks';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import Load from './components/Load';
import ConfirmDelete from "./components/ConfirmDelete";
import ContextWrapper from './components/ContextWrapper';

function App() {

  return (
    <div className="App">
      <ContextWrapper>
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
                  <Link className="nav-link" to="/search-results">Search Books</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/my-books">My Books</Link>
                </li>
              </ul>
            </div>
          </nav>
          {/* ROUTING */}
          <Switch>
            <Route path="/" exact component={SearchBooks} />
            <Route
              path="/my-books/"
              exact render={(props) => (
                <BookList {...props} bookList={["book1", "book2", "book3"]} topDescription={"My books"} searchButtonText={"Add Another Book"} />
              )}
            />
            <Route
              path="/search-results/"
              exact render={(props) => (
                <BookList {...props} topDescription={"Here are some books you can add"} searchButtonText={"Search Again"} />
              )}
            />
            <Route path="/loading" exact component={Load} />
            <Route path="/book/:bookID/:view" exact component={BookDetail} />
            <Route path="/confirm-delete/:bookID" exact component={ConfirmDelete} />
          </Switch>
        </Router>
      </ContextWrapper>
    </div>
  );
}

export default App;
