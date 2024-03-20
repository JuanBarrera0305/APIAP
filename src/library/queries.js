const getLibrary = "SELECT * FROM book";
const getLibraryById = "SELECT * FROM book WHERE id = $1";
const addBook = "INSERT into book (id,booktype,bookname) VALUES($1, $2, $3)";
const updateLibrary = "UPDATE book SET bookname = $1, booktype = $2 WHERE id = $3";
module.exports = {
    getLibrary,
    getLibraryById,
    addBook,
    updateLibrary,
};

//test "UPDATE book SET booktype = $2, bookname = $3 WHERE id = $1";