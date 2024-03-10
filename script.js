'use strict';

//Вывести на экран все дни недели

const weekDeys = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота','воскресенье' ];

const date = new Date();
let deyNumber = date.getDay();
let element = document.getElementById("myElement");

weekDeys.forEach (function(item, index) {        
    let dey = item +'<br>';
    if (deyNumber===0) deyNumber=7;
    if (index+1===deyNumber) dey = '<b>' + dey + '</b>';
    if (index>4) dey = '<i>' + dey + '</i>';
    element.insertAdjacentHTML('beforeend', dey);

});




