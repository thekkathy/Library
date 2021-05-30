const express = require("express");
const cors = require("cors");
const fetch = require('node-fetch');
require('dotenv').config();

const db = require("./firebase");

const PORT = 8000;
const app = express();

app.use(express.json());
app.use(cors({ origin: true }));

app.get('/google-books', (req, res) => {
    let bookTitle = req.query.title
    const url = new URL("https://www.googleapis.com/books/v1/volumes");
    url.searchParams.append("key", process.env.google_books_api_key);
    url.searchParams.append("q", bookTitle + "+intitle");
    url.searchParams.append("printType", "books");

    fetch(url)
        .then((resp) => {
            return resp.json();
        })
        .then((obj) => {
            let books = obj.items;
            if (books) {
                res.send(books);
            }
        })
})

app.get("/books/get", async (req, res) => {
    const snapshot = await db.collection("books").get();
    const books = [];
    snapshot.forEach((doc) => {
        books.push({ ...doc.data() });
    })
    res.send(books);
});

app.post("/books/add", async (req, res) => {
    const { book } = req.body;

    const resp = await db.collection("books").doc(book.id).set({
        book: book
    });

    console.log("Added document with ID: ", resp.id);
    res.sendStatus(200);
})

app.delete("/books/delete", async (req, res) => {
    const { book } = req.body;

    const resp = await db.collection("books").doc(book.id).delete().then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });

    res.sendStatus(200);
})

app.listen(PORT, () => {
    console.log(`Server listning at http://localhost:${PORT}`);
});