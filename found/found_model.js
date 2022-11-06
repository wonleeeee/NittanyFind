const config = require("../config");
var found = module.exports;

function compareDate(LDate, FDate) {
    const lDate = new Date(LDate)
    const fDate = new Date(FDate)

    if ( lDate.getFullYear() === fDate.getFullYear()
        && lDate.getMonth() === fDate.getMonth() &&
        Math.abs(fDate.getDate() - lDate.getDate()) <= 3) {
        return 1

    } else {
        return 0
    }
}

function compareLocation(locx1, locy1, locx2, locy2) {
    const dis_x = locx1 - locx2
    const dis_y = locy1 - locy2
    const dist = Math.sqrt(Math.abs(dis_x* dis_x) + Math.abs(dis_y *dis_y));
    if (dist <= 1000) {
        return 1
    } else {
        return 0
    }
}


//compareDate("2022-11-05 18:00:00", "2022-11-08 20:55:00")
//compareLocation(3,2,4,5)