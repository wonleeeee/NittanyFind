var lost = require("./found_model");
var router = require("express").Router();

// function getBook(req, res) {
//     //console.log("Test")
//     fileBoard.getBook((err,result) => {
//         if (err){
//             console.log(err);
//         }
//         else {
//             fileBoard.getPageNum((err,result2) => {
//                 if (err) {
//                     console.log (err);
//                 }
//                 res.json({
//                     pageNum : Math.ceil(result2[0]["pageNum"]/10),
//                     boardData: result}
//                 );
//             });
//         }
//     });
// }
