var lost = require("./lost_model");
var router = require("express").Router();

function func1(date1, date2) {
    return 1;
}

function func2(locx1, locy1, locx2, locy2) {
    return 1;
}

function findMatch(req, res) {
    model = req.body.name;
    category = req.body.category;
    date = req.body.date;
    lox = req.body.locationx;
    loy = req.body.locationy;
    const possibleMatch = []
    lost.findCategMatch(category, model, (err, result) => {
        if (err){
            console.log(err);
            res.json({ errMsg: "error"});
        }

        //result 에는 category와 name이 match 된 결과들이 담겨있다. 
        console.log(result, result.length);
        for (i = 0; i < result.length; i++) {
            console.log(i,result[i])
            if (func1(date, result[i]["date"]) == 1 
            && func2( lox, loy, result[i]["locationx"], result[i]["locationy"]) == 1){
                //console.log(result[i]);
                possibleMatch.push(result[i]);
                console.log(i,"success");
            }}

        if (possibleMatch.length > 0){
            res.json(possibleMatch);
        }
        else {
            lost.insertLost(model, category, date, lox, loy, (err, result) => {
                if (err){
                    console.log(err);
                    res.json({ errMsg: "error"});
                }
                // console.log(result);
                res.json({Msg : "lost information successfully inserted"});
            })
        }

})}


// function insertLost(req, res) {
//     model = req.body.name;
//     category = req.body.category;
//     date = req.body.date;
//     lox = req.body.locationx;
//     loy = req.body.locationy;
//     lost.insertLost(model, category, date, lox, loy, (err, result) => {
//         if (err){
//             console.log(err);
//             res.json({ errMsg: "error"});
//         }
//         console.log(result);
//         res.json(result);
//     })
// }

router.post("/lost-match", findMatch);
module.exports = router;