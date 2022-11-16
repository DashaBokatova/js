//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function per (a, b){
  let result = (a * b);
    console.log(result)
}
per(5, 9)

//- створити функцію яка обчислює та повертає площу кола з радіусом r
function circle (PI, r){
    return PI * r ** 2;
}
console.log(circle(3.14, 3))

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cilinder (PI, h, r){
    return 2 * (PI * r) * (h + r);
}
console.log(cilinder(3.14, 9, 5))

//- створити функцію яка приймає масив та виводить кожен його елемент
function array (arr){
    for (const arrElement of arr) {
        console.log(arrElement)
    }
}
array([10, 20, 'abc' , true]);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function texts (tag, arguments) {
    document.write(`<${tag}>${arguments}</{tag}>`);

}
texts('p', 'hello');


//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function abcd (text) {
    document.write(`<ul>`);
      document.write(
          `<li>${text}</li>`,
          `<li>${text}</li>`,
          `<li>${text}</li>`,
      )
    document.write(`</ul>`);
}
abcd('okten');

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function asd(text, counter) {
    document.write(`<ul>`);
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${text}</li>`)

    }
    document.write(`</ul>`);
}
asd('helloo', 3);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arr = [1 , 'abc', true];
const elem = function (array) {
    document.write(`<ul>`)
    for (const arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`);
    }
    document.write(`</ul>`)
}
elem(arr);


//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {id:0, name:'dasha', age: 20},
    {id:1, name:'masha', age: 30},
    {id:2, name:'sasha', age: 40},
];
function userss(arr) {
    for (const arrElement of arr) {
      document.write(`<div>${arrElement.id} ${arrElement.name} ${arrElement.age}</div>`)
    }
}
userss(users);

//- створити функцію яка повертає найменьше число з масиву
let minimal = [1, 3, 7, 9];

function minimals (array) {
  let min = array[0];
    for (const arrayElement of array) {
       if (arrayElement < min) {
           min = arrayElement;
       }

    }
    return min;
}
console.log(minimals(minimal));

//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let arrr = [5, 8, 12];

function arraySum(array) {
 let sum = 0;
    for (let i = 0; i < arrr.length; i++) {
       sum += array[i];
    }
    console.log(sum);
}
arraySum(arrr)



