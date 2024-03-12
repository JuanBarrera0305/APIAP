const Pool = require("pg").Pool;

const pool = new Pool({

    //user: "jjbarre",
   // host: "dpg-cn5se1mv3ddc738mjhv0-a",
   // database: "library_leo8",
    //password: "t1UTZF8NIY12RTqfYQlx7DbU24xCUSMo",
   // port: 5432,

    user: "postgres",
    host: "localhost",
    database: "library",
    port:5432,


});

module.exports = pool;
