'use strict';

//задание 1. Вывести консоль числа из массива, начинающиеся на 2 или на 4
let numArray =[
    '453263', '942631', '5978634', '4987254', '5586547', '55245', '254821'
];

let samplingOfNumbers = function(arr) {
    for (let i=0; i<arr.length; i++) {
        let item = arr[i];
        if (item[0] == 2 || item[0] == 4) 
            console.log(item);        
    }
};
samplingOfNumbers(numArray);



//задание 2. Вывести все простые числа от 1 до 100

let primeNumbers = function(start, end){
    for (let num = start; num <= end; num++) {
        let marker = false;
        for (let i = 2; i < num; i++){
            if(num % i === 0) 
            marker = true;             
        }
        if (!marker) 
            console.log (num + ' - делители этого числа: 1 и ' + num);       
    }
};
primeNumbers(1, 100);

