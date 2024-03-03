'use strict';

//Проверка на число и вывод числовым значением

let arg; 

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

do {
    arg = prompt( 'введите число');      
}   while (!isNumber(arg));
arg = +arg;

console.log (arg);


