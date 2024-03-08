'use strict';

//Вывести на экран все дни недели

const weekDeys = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота','воскресенье'];

const date = new Date();
const deyNumber = date.getDay();


weekDeys.forEach (function(item, index) {
    let dey = item +'<br>';
    if (index+1===deyNumber) dey = '<b>' + dey + '</b>';
    if (index>4) dey = '<i>' + dey + '</i>';
    document.write(dey);
});




