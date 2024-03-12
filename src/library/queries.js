const getLibrary = "SELECT * FROM book";
const getLibraryById = "SELECT * FROM book WHERE id = $1";
const addBook = "INSERT into book (id,booktype,bookname) VALUES($1, $2, $3)";
const updateLibrary = "UPDATE book set bookname = $1 where id = $2";

module.exports = {
    getLibrary,
    getLibraryById,
    addBook,
    updateLibrary,
};

//test