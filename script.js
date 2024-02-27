'use strict';
let lang = prompt('На каком языке вывести дни недели?', '"ru" или "en"');

let week = [
    ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
    ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
];

let showWeek = function (arr) {
    for (let i=0; i<arr.length; i++)
        console.log(arr[i]);       
};

if (lang=='ru') {
    showWeek(week[0]); 
} else if (lang=='en'){
    showWeek(week[1]);
} else {
    console.log ('Что то пошло не так');
}

switch (lang) {
    case 'ru':
        showWeek(week[0]);
        break;    
    case 'en':
        showWeek(week[1]);
        break;
    default:
        console.log('Что то пошло не так');
}