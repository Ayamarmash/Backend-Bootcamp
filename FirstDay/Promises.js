function getBooks(callback){
    return new Promise((resolve, reject)=>{
        let books = []
        setTimeout(()=>{ // wait 1 sec then fill the books array
            books = [
                {
                    title: "Title 1",
                    author: "Lama"
                },
                {
                    title: "Title 2",
                    author: "Aya"
                }
            ]
            resolve(books) // if the promise is done (with no errors) it will return the books
        }, 1000)
    })
}

function findAuthor(callback, bookTitle){
    getBooks().then((books)=>{ // get the books, if no error occured then run the function in (then)
        const book = books.find((book) => (book.title === bookTitle));
        callback(book.author)
    })
}


findAuthor(console.log, "Title 2")