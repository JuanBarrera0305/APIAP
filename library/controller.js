const pool = require('../../db');
const queries = require('./queries');

//Get All Data
const getLibrary = (req, res) => {
    pool.query(queries.getLibrary,(error, results)=> {
        if (error)throw error;
        res.status(200).json(results.rows);
    });
};

module.exports = {
    getLibrary,
};