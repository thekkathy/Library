import React, { useContext, useEffect, useState } from 'react'
import {BookResultsListContext} from '../context/bookResultsListContext';
import {IsLoadedContext} from '../context/isLoadedContext';
import { useHistory } from "react-router-dom";

const SearchBooks = () => {
    const [title, setTitle] = useState("");
    const [searchPerformed, setSearchPerformed] = useState(false);
    const {isLoaded, setIsLoaded} = useContext(IsLoadedContext);
    const {setBookResultsList} = useContext(BookResultsListContext);

    const history = useHistory();

    useEffect(() => {
        setSearchPerformed(false);
        setIsLoaded(false)
    }, [])

    const apiFetch = async () => {
        try {
            await fetch(`http://localhost:8000/google-books?title=${title}`)
                .then(
                    resp => { return resp.json() }
                )
                .then((obj) => {
                    if (obj.length === 0) {
                        setBookResultsList([]);
                    }
                    else {
                        setBookResultsList(obj);
                        setSearchPerformed(true);
                        setIsLoaded(true);
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

    const redirect = () => {
        if(!isLoaded && searchPerformed){
            history.push("/loading");
        }
    }

    return (
        <div className="">
            <main>
                <div className="p-4 m-4">
                    <div className="row display-4 m-4 justify-content-center">
                        <span className="text-success" style={{ fontSize: "2em" }}>
                            <i class="fas fa-book"></i>
                        </span>
                    </div>
                    <div className="row display-4 m-4 justify-content-center">Bookshelf</div>
                    <div className="row mt-4 justify-content-center">Welcome to Bookshelf! We are a website that lets you find and save books.</div>
                    <div className="row mb-4 justify-content-center">Type in a title below to start building your collection.</div>
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
                                    onChange={redirect()}
                                >
                                    Search
                                    </button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </main>
        </div>
    );
}

export default SearchBooks
