'use strict';

let data = 'Какая-то ну очень преочень длинная строка';

let checkStr = function(str) {
    if (typeof(str)==='string'){
        let dataStr = str.trim();
        if (dataStr.length>30) {
            dataStr = dataStr.slice(0,30) + '...';            
        }
        console.log(dataStr);
    } else {
        console.log("Введено не строковое значение");
    }
};

checkStr(data);