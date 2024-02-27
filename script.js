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
//дни недели через if
if (lang=='ru') {
    showWeek(week[0]); 
} else if (lang=='en'){
    showWeek(week[1]);
} else {
    console.log ('Что то пошло не так');
}
//дни недели через switch-case
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
//дни недели без if и switch
showWeek(week[+(lang<='en')]);

let namePerson = 'Cthutq';

(namePerson == "Артем") ? console.log("Директор") : (namePerson == "Александр") ? console.log("Преподаватель") : console.log("Студент");






