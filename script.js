'use strict';
let lang = prompt('На каком языке вывести дни недели?', '"ru" или "en"');

const weekDeys = {
    ru: ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
};


let showWeek = function (arr) {
    for (let i=0; i<arr.length; i++)
        console.log(arr[i]);       
};

//дни недели через if
if (lang=='ru') {
    showWeek(weekDeys.ru); 
} else if (lang=='en'){
    showWeek(weekDeys.en);
} else {
    console.log ('Что то пошло не так');
}

//дни недели через switch-case
switch (lang) {
    case 'ru':
        showWeek(weekDeys.ru);
        break;    
    case 'en':
        showWeek(weekDeys.en);
        break;
    default:
        console.log('Что то пошло не так');
}

//дни недели без if и switch
showWeek(weekDeys[lang]);


let namePerson = 'Сергей';

(namePerson == "Артем") ? console.log("Директор") : (namePerson == "Александр") ? console.log("Преподаватель") : console.log("Студент");






