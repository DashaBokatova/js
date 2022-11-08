//Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x= 25;
 if(x !==0) {
     console.log('true')
 }else if (x ==0){
     console.log('false')
 }

let a= 1;
if(a !==0) {
    console.log('true')
}else if (a ==0){
    console.log('false')
}

let b= 0;
if(b !==0) {
    console.log('true')
}else if (b ==0){
    console.log('false')
}

let c= -3;
if(c !==0) {
    console.log('true')
}else if (c ==0){
    console.log('false')
}

// Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 59;
 if (time>= 0 && time<=15){
     console.log('1/4');
 }
 if (time>15 && time<=30){
     console.log('2/4');
 }
if (time>30 && time<=45){
    console.log('3/4');
}
if (time>45 && time<=59){
    console.log('4/4');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 31;
if (day>=1 && day<=10){
    console.log('1decada');
}
if (day>10 && day<=20){
    console.log('2decada');
}
if (day>20 && day<=31){
    console.log('3decada');
}

//Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
switch ('7') {
    case '1':
        console.log('monday');
        break;
    case '2':
        console.log('tuesday');
        break;
    case '3':
        console.log('wednesday');
        break;
    case '4':
        console.log('thursday');
        break;
    case '5':
        console.log('friday');
        break;
    case '6':
        console.log('saturday');
        break;
    case '7':
        console.log('sunday');
        break;
}

//- Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let num1 = +prompt('enter first number')
let num2 = +prompt('enter second number');
 if (num1 > num2){
     console.log(num1);
 }else if (num2 > num1){
     console.log(num2);
 }else if (num1 == num2){
     console.log('numbers equal')
 }

//є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let xx = prompt() || 'default';
 console.log(xx);