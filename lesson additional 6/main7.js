//- Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
//document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
const cutSrting = (str, n) => {
    const arr = [];
    for (let i = 0; i < str.length; i += n) {
arr.push(str.slice(i, n + i))
    }
    return arr;
}
let cutString1 = cutSrting ('naslajdenie', 3);
console.log(cutString1);

//- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
    //let str = 'Каждый охотник желает знать';
//document.writeln(delete_characters(str, 7)); // Каждый
let str = 'Каждый охотник желает знать';
const delete_characters = (srt, length) => str.slice(0, length);
let delete1 = delete_characters(str, 7);
console.log(delete1);

//- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
   // let str = "HTML JavaScript PHP";
//document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let str1 = "HTML JavaScript PHP";
const insert_dash = (str) => str.split(' ').join('-').toUpperCase();
let insertdash = insert_dash(str1);
console.log(insertdash)
//- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let strr = 'okten';
const up = (str) => str[0].toUpperCase() + str.slice(1);
console.log(up(strr));

//- Дано список імен.
    let n1 = 'Harry..Potter';
let replase = n1.replaceAll('..',' ');
console.log(replase);
let n2 = 'Ron---Whisley';
let replace2 = n2.replaceAll('---',' ');
console.log(replace2);
let n3 = 'Hermione__Granger';
let replace3 = n3.replaceAll('__',' ');
console.log(replace3);
//Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
//let n1 = 'Harry Potter'
//let n2 = 'Ron Whisley'
//let n3 = 'Hermione Granger'


   // - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)

//- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let str8 = "Have a good day "
const capitalize = (str) => str.split(' ').map(value => value[0].toUpperCase() + value.slice(1)).join(' ');
console.log(capitalize(str8));

//- Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
const val = (str1) => {
   let str = str1.toLowerCase();
   if (!str.startsWith('@') && str.includes('@') && str.includes('.', str.indexOf('@') + 3)) {
       console.log('Valid');
   }else {
       console.log('Not valid');
   }
}
val('someemail@gmail.com');
val('someeMAIL@gmail.com');
val('someeMAIL@i.ua');
val('some.email@gmail.com');
//Протестувати на значеннях
//someemail@gmail.com
//someeMAIL@gmail.com
//someeMAIL@i.ua
//some.email@gmail.com

