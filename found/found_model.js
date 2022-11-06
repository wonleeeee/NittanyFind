const config = require("../config");
var found = module.exports;

found.compareDate = function compareDate(LDate, FDate) {
    const lDate = new Date(LDate)
    const fDate = new Date(FDate) 
    console.log(LDate, FDate);
    if ( lDate.getFullYear() === fDate.getFullYear()
        && lDate.getMonth() === fDate.getMonth() &&
        Math.abs(fDate.getDate() - lDate.getDate()) <= 3) {
        return 1

    } else {
        return 0
    }
}

found.compareLocation = function compareLocation(locx1, locy1, locx2, locy2) {
    const dis_x = locx1 - locx2
    const dis_y = locy1 - locy2
    const dist = Math.sqrt(Math.abs(dis_x* dis_x) + Math.abs(dis_y *dis_y));
    if (dist <= 1000) {
        return 1
    } else {
        return 0
    }
}

