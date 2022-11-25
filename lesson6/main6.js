//- Знайти та вивести довижину настипних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'
let st = 'hello world';
console.log(st.length);
let st2 = 'lorem ipsum';
console.log(st2.length);
let st3 = 'javascript is cool';
console.log(st3.length);


//- Перевести до великого регістру наступні стрінгові значення
//'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world';
console.log(str1.toUpperCase());
let str2 = 'lorem ipsum';
console.log(str2.toUpperCase());
let str3 = 'javascript is cool';
console.log(str3.toUpperCase())


//- Перевести до нижнього регістру настипні стрінгові значення
//'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let str4 = 'HELLO WORLD';
console.log(str4.toLowerCase());
let str5 = 'LOREM IPSUM';
console.log(str5.toLowerCase())
let str6 = 'JAVASCRIPT IS COOL';
console.log(str6.toLowerCase());


//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str7 = ' dirty string   ';
let s = str7.trim();
console.log(s);


//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
   let str8 = 'Ревуть воли як ясла повні';
   let split = str8.split(' ');
console.log(split);


//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let num = [10,8,-7,55,987,-1011,0,1050,0];
let strin = num.map (value => value.toString());
console.log(strin);


//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
let sortNums = (direction, arr) => {
    if (direction === 'asceding') {
       arr.sort((a,b) => a - b) ;
    }else if (direction === 'desceding') {
        arr.sort((a,b) => b - a);
    }
    return arr;
}
console.log(sortNums('asceding', nums))
//sortNums(nums,'ascending') // [3,11,21]
//sortNums(nums,'descending') // [21,11,3]


//- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
   {title: 'Frontend', monthDuration: 4}
];
//-- відсортувати його за спаданням за monthDuration
let sort = coursesAndDurationArray.sort ((v1, v2) => {
    return v2.monthDuration - v1.monthDuration;
});
console.log(sort);

//-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
function filter (array, predicate) {
    let filterArr = [];
    for (const item of array) {
        if (predicate(item)) {
            filterArr.push(item);
        }
    }
    return filterArr;
}
console.log(filter(coursesAndDurationArray, (item) => item.monthDuration>5));


//описати колоду карт
let deck = [
    {cardSuit:'Spade', value: 6, color:'Black'},
    {cardSuit:'Clubs', value: 6, color:'Black'},
    {cardSuit:'Hearts', value: 6, color:'Red'},
    {cardSuit:'Diamonds', value: 6, color:'Red'},
    {cardSuit:'Spade', value: 7, color:'Black'},
    {cardSuit:'Clubs', value: 7, color:'Black'},
    {cardSuit:'Hearts', value: 7, color:'Red'},
    {cardSuit:'Diamonds', value: 7, color:'Red'},
    {cardSuit:'Spade', value: 8, color:'Black'},
    {cardSuit:'Clubs', value: 8, color:'Black'},
    {cardSuit:'Hearts', value: 8, color:'Red'},
    {cardSuit:'Diamonds', value: 8, color:'Red'},
    {cardSuit:'Spade', value: 9, color:'Black'},
    {cardSuit:'Clubs', value: 9, color:'Black'},
    {cardSuit:'Hearts', value: 9, color:'Red'},
    {cardSuit:'Diamonds', value: 9, color:'Red'},
    {cardSuit:'Spade', value: 10, color:'Black'},
    {cardSuit:'Clubs', value: 10, color:'Black'},
    {cardSuit:'Hearts', value: 10, color:'Red'},
    {cardSuit:'Diamonds', value: 10, color:'Red'},
    {cardSuit:'Spade', value: 'Jack', color:'Black'},
    {cardSuit:'Clubs', value: 'Jack', color:'Black'},
    {cardSuit:'Hearts', value: 'Jack', color:'Red'},
    {cardSuit:'Diamonds', value: 'Jack', color:'Red'},
    {cardSuit:'Spade', value: 'Queen', color:'Black'},
    {cardSuit:'Clubs', value: 'Queen', color:'Black'},
    {cardSuit:'Hearts', value: 'Queen', color:'Red'},
    {cardSuit:'Diamonds', value: 'Queen', color:'Red'},
    {cardSuit:'Spade', value: 'King', color:'Black'},
    {cardSuit:'Clubs', value: 'King', color:'Black'},
    {cardSuit:'Hearts', value: 'King', color:'Red'},
    {cardSuit:'Diamonds', value: 'King', color:'Red'},
    {cardSuit:'Spade', value: 'Ace', color:'Black'},
    {cardSuit:'Clubs', value: 'Ace', color:'Black'},
    {cardSuit:'Hearts', value: 'Ace', color:'Red'},
    {cardSuit:'Diamonds', value: 'Ace', color:'Red'}
];

//- знайти піковий туз
let card1 = deck.filter(value => value.cardSuit === 'Spade' && value.value === 'Ace');
console.log(card1);
//- всі шістки
let card2 = deck.filter(value => value.value === 6);
console.log(card2);
//- всі червоні карти
let card3 = deck.filter(value => value.color === 'Red');
console.log(card3)
//- всі буби
let card4 = deck.filter(value => value.cardSuit === 'Diamonds');
console.log(card4);
//- всі трефи від 9 та більше
let card5 = deck.filter(value =>(value.cardSuit === 'Clubs' && value.value >=9) || (value.cardSuit === 'Clubs' && typeof value === 'string'));
console.log(card5)



//Додатково по reduce
//Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
//{
 //   spades:[],
 //       diamonds:[],
 //   hearts:[],
  //  clubs:[]
//}
let red = deck.reduce((accumulator, value) => {
  if (value.cardSuit === 'Spade') {
      accumulator.spades.push(value);
  } else if (value.cardSuit === 'Clubs') {
      accumulator.clubs.push(value);
  } else if (value.cardSuit === 'Diamonds'){
      accumulator.diamonds.push(value);
  }else if(value.cardSuit === 'Hearts'){
      accumulator.hearts.push(value)
  }
  return accumulator;
}, {
    spades: [],
    diamonds: [],
    clubs: [],
    hearts: [],
});
console.log(red);