import React, { useState } from "react";
import BookCard from './components/BookCard';

function App() {
  const [title, setTitle] = useState("");
  const [books, setBooks] = useState([]);

  const apiFetch = async () => {
    try {
      await fetch(`http://localhost:8000/google-books?title=${title}`)
        .then(
          resp => { return resp.json() }
        )
        .then((obj) => {
          if (obj.length === 0) {
            setBooks([]);
          }
          else {
            setBooks(obj);
          }
        })
    } catch (error) {
      console.log(error);
    }
  }


  const apiFetchOnEnter = async (e) => {
    if (e.key === 'Enter') {
      apiFetch();
    }
  }

  return (
    <div className="App">
      <main>
        <div className="contianer p-4 m-4">
          <div className="row display-4 m-4 justify-content-center">Library</div>
          <div className="row m-4 justify-content-center">Search for books with keywords</div>
          <div className="row m-4 justify-content-center">
            <div className="card w-100 px-5 py-3">
              <div className="row">
                <input
                  className="form-control mx-auto my-2"
                  type="search"
                  placeholder="Search book title"
                  aria-label="Search"
                  onChange={(e) => {
                    e.preventDefault();
                    setTitle(e.target.value);
                  }}
                  onKeyPress={apiFetchOnEnter}
                />
              </div>
              <div className="row">
                <button
                  className="btn btn-outline-success mx-auto my-2"
                  type="submit"
                  onClick={apiFetch}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="row m-4 justify-content-center">
            <div className="container">
              <div className="h3 font-weight-normal">
                {books.map(book => {
                  return <div>
                    <button className="btn">{book.volumeInfo.title}</button>
                    <BookCard />
                  </div>
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
