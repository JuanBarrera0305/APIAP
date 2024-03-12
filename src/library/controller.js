const pool = require('../../db');
const queries = require('./queries');

//Get All Data
const getLibrary = (req, res) => {
    pool.query(queries.getLibrary,(error, results)=> {
        if (error)throw error;
        res.status(200).json(results.rows);
    });
};

//Get Library By ID
const getLibraryById = (req,res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getLibraryById,[id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
}

//Add Book
const addBook = (req,res) => {
    const {id, booktype, bookname} = req.body;
    pool.query(queries.addBook,[id, booktype, bookname], (error, results) => {
        if(error) throw error;
        res.status(200).send("Added new Library Item Successfully");
    });
}

//Update Library
const updateLibrary = (req, res) => {
    //const id = parseInt(req.params.id);
    const { bookname, id } = req.body;
    pool.query(queries.updateLibrary, [ bookname, id], (error, results) => {
        if(error) throw error;
        res.status(200).send("Update Library Successfully")
    })
}
module.exports = {
    getLibrary,
    getLibraryById,
    addBook,
    updateLibrary,
};