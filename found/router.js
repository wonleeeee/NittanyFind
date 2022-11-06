var found = require("./found_model");
var router = require("express").Router();

function findlostMatch(req, res) {
    console.log("start");
    model = req.body.name;
    category = req.body.category;
    date = req.body.date;
    lox = req.body.locationx;
    loy = req.body.locationy;
    des = req.body.description;
    const possibleMatch = []
    found.findCategMatch(category, model, (err, result) => {
        if (err){
            console.log(err);
            res.json({ errMsg: "error"});
        }
         
        console.log(result, result.length);
        for (i = 0; i < result.length; i++) {
            //console.log(i,result[i])
            if (found.compareDate(date, result[i]["date"]) == 1 
            && found.compareLocation( lox, loy, result[i]["locationx"], result[i]["locationy"]) == 1){
                //console.log(result[i]);
                possibleMatch.push(result[i]);
                console.log(i,"success");
            }}

        if (possibleMatch.length > 0){
            res.json(possibleMatch);
        }
        else {
            found.insertfound(model, category, date, lox, loy, des, (err, result) => {
                if (err){
                    console.log(err);
                    res.json({ errMsg: "error"});
                }
                // console.log(result);
                res.json({Msg : "found information successfully inserted"});
            })
        }
    
})}


router.post("/found-match", findlostMatch);
module.exports = router;