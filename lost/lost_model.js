var lost = module.exports;
const config = require("../config");

const getMatchQry = 
    "SELECT id, date, locationx, locationy, fuid, status, picture "
    + "FROM lostfound.found WHERE category = ? AND name = ? AND status = 0";

const insertLostQry = 
    "INSERT INTO lostfound.lost VALUE " +
    "(NULL, ?, ?, ?, ?, ?, NULL, 0, NULL)"

lost.findCategMatch = function findMatch(category, model, callback) {
    info = [category, model];
    config.db.query(getMatchQry, info, (err,result) => {
        if(err) callback(err, null);

        callback(null, result);
    })
}

lost.insertLost = function insertLost (name, category, date, lox, loy, callback) {
    info = [name, category, date, lox, loy];
    config.db.query(insertLostQry, info, (err, result) => {
        if(err) callback (err, null);

        callback(null, result);
    })
}
