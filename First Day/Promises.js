function getBooks(callback){
    return new Promise((resolve, reject)=>{
        let books = []
        setTimeout(()=>{
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
            resolve(books)
        }, 1000)
    })
}

function findAuthor(callback, bookTitle){
    getBooks().then((books)=>{
        const book = books.find((book) => (book.title === bookTitle));
        callback(book.author)
    })
}


findAuthor(console.log, "Title 2")