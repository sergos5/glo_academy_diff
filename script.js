// Создать переменную num со значением 266219 (тип данных число)
let num = 266219;

//Вывести в консоль произведение (умножение) цифр этого числа 
let numStr = num.toString();
let result = 1;
for (let i =0; i<numStr.length; i++) {
    result *=numStr[i];
}
console.log(result);

// Полученный результат возвести в степень 3

let cube = result**3;

// Вывести в консоль первые 2 цифры полученного числа
console.log(cube.toString().substring(0,2));