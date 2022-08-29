// Book Controller

const Book = require('../DataBase/models/book.model')

function fillBookInfos(data, book){
    if(!data.title || !data.pages){
        return -1;
    }else{
        book.title = data.title;
        book.author = data.author;
        book.pages = data.pages;
        book.publishingDate = data.publishingDate;
        book.resume = data.resume;
        book.cover = data.cover;
        //details
        book.detail.readers = data.readers;
        book.detail.reviews = data.reviews;
        book.detail.rank = data.rank;
    }

    return book
}

/*------------------------------
*            /book
*-------------------------------
*/

// GET
exports.index = async (req, res)=>{
    await Book.find()
        .exec((err, books)=>{
            if(err){
                res.send("An error occured while finding data")
                console.error(`An error occured while get all the books: ${err}`);
            }else{
                console.log(books);
                if(books.length == 0){
                    res.status(500)
                    res.json(
                        {
                            "err": err,
                            "succes": false,
                            "message": "There is no book"
                        }
                    )
                }else{
                    res.status(200)
                    res.send(books)
                }
            }
        })
}

//POST
exports.create = async (req, res)=>{
    let newBook = new Book();

    newBook = fillBookInfos({
        "title": req.body.title,
        "author": req.body.author,
        "pages": req.body.pages,
        "publishingDate": req.body.publishingDate,
        "resume": req.body.resume,
        "cover": req.body.cover,
        "detail": {
            "readers": req.body.readers,
            "reviews": 0,
            "rank": 0
        }
    }, newBook)

    await newBook.save((err, book)=> {
        if(err){
            res.status(500)
            res.send(`An error occured while saving book: ${err.errors.title}`)
            console.error(`An error occured while posting a book: ${err}`);
        }else{
            res.json(book)
        }
    })
}

/*------------------------------
*          /book/:id
*-------------------------------
*/

// GET 
exports.getOneBook = async (req, res)=>{
    await Book.findOne({
        _id: req.params.id
    })
    .exec((err, book)=> {
        if(err){
            res.send("An error occured while retreving your book, maybe try another id !")
            console.error(`An error occured while loading book: ${err}`);
        }else{
            if(book != null){
              res.json(book);  
            }else{
                res.json(
                    {
                        "err": err,
                        "success": false,
                        "message": "Book do not exist"
                    }
                )
            }
            
        }
    })
}

//PUT
exports.upsert = (req, res)=>{ //Upsert
    Book.findOneAndUpdate({
        _id: req.params.id
    },{
        $set: {
            title: req.body.title
        }
    },{
        upsert: true
    },
    (err, newBook)=>{
        if(err){
            res.send("An error occured while updating the book")
            console.error(`An error occured while upserting a book: ${err}`);
        }else{
            res.status(201)
            res.json(
                {
                    "err": err,
                    "success": true,
                    "message": "Book have being updated"
                }
            )
        }
    })
    
}

//DELETE
exports.remove = (req, res)=>{
    Book.findOneAndRemove({
        _id: req.params.id
    },
    (err, book)=>{
        if(err){
            res.status(500);
            res.send("An error occured while remouving your book")
            console.error(`An error occured while remouving a book: ${err}`);
        }else{
            res.status(201);
            res.json(
                {
                    "err": err,
                    "success": true,
                    "message": "Book have being remouved"
                }
            )
        }
    })
}