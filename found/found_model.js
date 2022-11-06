var found = module.exports;
const config = require("../config");

const getMatchQry = 
    "SELECT * FROM lostfound.lost WHERE category = ? AND name = ?";


// const getBookFileQry = "SELECT file FROM mydb.book WHERE id=?";


// fileBoard.getPageNum = function getPageNum(callback){
//     config.db.query(getPageQry, (err,result) => {
//         if(err) callback(err,null);

//         callback(null, result);
//     });
// }