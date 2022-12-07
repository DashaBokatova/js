//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surmane, email, phone){
    this.id = id;
    this.name = name;
    this.surname = surmane;
    this.email = email;
    this.phone = phone;
}

//створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = [
    new User (1,'Dasha','Bokatova','dasha2001@gmail.com',38095367832),
    new User(5,'Sasha','Popov','sasha2000@gmail.com',380987654343),
    new User (30,'Masha','Petruk','mashapet99@mail.com', 380993456778),
    new User (15,'Kolia','Sokath','koliaaa@mail.ua',380952342334),
    new User(20, 'Olia','Tkach','oliatk@gmail.com',380954322334),
    new User(45,'Dima','Bruk','dimon@mail.com',380998766776),
    new User (10,'Vasia','Voll','vas@gmail.com',380931222112),
    new User(35,'Karina','Rand','karr@mail.com',380991233445),
    new User (40,'Oleg','Okten','ollegk@mail.com',380976665445),
    new User (25,'Yana','Tresh','yan@gmail.com',380995556677)
];
console.log(users);

//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let fill = users.filter((user) => user.id%2 === 0 )
console.log(fill)

// Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log (users.sort(function (a, b){
    return a.id - b.id;
}));

//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
//створити пустий масив, наповнити його 10 об'єктами Client
let clients = [
    new Client (1,'Dasha','Bokatova','dasha2001@gmail.com',38095367832, ['dress','heels']),
    new Client(5,'Sasha','Popov','sasha2000@gmail.com',380987654343,['dress','blazer','tanktop']),
    new Client (30,'Masha','Petruk','mashapet99@mail.com', 380993456778,['boots']),
    new Client (15,'Kolia','Sokath','koliaaa@mail.ua',380952342334,['polo','shirt','sweater','jeans']),
    new Client(20, 'Olia','Tkach','oliatk@gmail.com',380954322334,['shorts','jeans']),
    new Client(45,'Dima','Bruk','dimon@mail.com',380998766776,['longsleeve']),
    new Client (10,'Vasia','Voll','vas@gmail.com',380931222112,'sweater','socs','hat','shoes'),
    new Client(35,'Karina','Rand','karr@mail.com',380991233445,['dress']),
    new Client (40,'Oleg','Okten','ollegk@mail.com',380976665445,['shirt','watch']),
    new Client (25,'Yana','Tresh','yan@gmail.com',380995556677,['skirt'])
];
console.log(clients);

//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clients.sort(function (a,b){
    if (a.order.length > b.order.length) {
        return 1;
    }
    if (a.order.length < b.order.length){
        return -1;
    }
    if (a.order.length === b.order.length){
        return 0;
    }

}));

//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car (model, manukact, year, maxspeed,enginevolume) {
    this.model = model;
    this.manufact = manukact;
    this.year = year;
    this.maxspeed = maxspeed;
    this.enginevolume = enginevolume;
    this.drive = function (){return `driving at a speed of ${this.maxspeed} km per hour`;}
    this.info = function () {
        for (const argumentsKey in this) {
         if (typeof this[argumentsKey] !== 'function')  {
           return  `${argumentsKey} - ${this[argumentsKey]}`
         }
        }
    }
    this.increaseMaxSpeed = function (newSpeed) {
       return this.maxspeed = this.maxspeed + newSpeed;
    }
    this.changeYear = function (newValue) {
        return this.year = newValue;
    }
    this.addDriver = function (driver) {
       return this.driver = driver;
    }
}

let car1 = new Car ('audi','Germany','2005',225, '5.9l');
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    console.log(car1.drive())
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
console.log(car1.info())
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpead
console.log(car1.increaseMaxSpeed(100))
//-- changeYear (newValue) - змінює рік випуску на значення newValue
console.log(car1.changeYear(2022))
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в
console.log(car1.addDriver({name:'OLeg'}))
console.log(car1);


//- (Те саме, тільки через клас)
//Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
class Car {
    constructor(model, manukact, year, maxspeed,enginevolume) {
        this.model = model;
        this.manufact = manukact;
        this.year = year;
        this.maxspeed = maxspeed;
        this.enginevolume = enginevolume;
    }
    drive (){return `driving at a speed of ${this.maxspeed} km per hour`;}
    info () {
        for (const argumentsKey in this) {
            if (typeof this[argumentsKey] !== 'function')  {
                return  `${argumentsKey} - ${this[argumentsKey]}`
            }
        }
    }
    increaseMaxSpeed (newSpeed) {
        return this.maxspeed = this.maxspeed + newSpeed;
    }
    changeYear (newValue) {
        return this.year = newValue;
    }
    addDriver (driver) {
        return this.driver = driver;
    }
}
let car1 = new Car ('audi','Germany','2005',225, '5.9l');
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
console.log(car1.drive())
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
console.log(car1.info())
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpead
console.log(car1.increaseMaxSpeed(100))
//-- changeYear (newValue) - змінює рік випуску на значення newValue
console.log(car1.changeYear(2022))
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в
console.log(car1.addDriver({name:'OLeg'}))
console.log(car1);



//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
function Sindarella (name,age,footsize) {
    this.name = name;
    this.age = age;
    this.footsize = footsize;
}
let prinses =[
 new Sinderella('Sindarella1', 18, 34 ),
 new Sinderella('Sindarella2',19, 34.5),
 new Sinderella('Sindarella3', 20, 35),
 new Sinderella('Sindarella4', 21, 35.5),
 new Sinderella('Sindarella5', 22, 36),
 new Sinderella('Sindarella6', 23, 37),
 new Sinderella('Sindarella7', 24, 38),
 new Sinderella('Sindarella8', 25, 39),
 new Sinderella('Sindarella9', 26, 40),
 new Sinderella('Sindarella10', 27,41)
];

//Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {

    constructor(name, age, shoes) {
        this.name = name;
        this.age = age;
        this.shoes = shoes;
    }
}
let pr = new Prince('Prinz', 29, 37);
//   За допомоги циклу знайти яка попелюшка повинна бути з принцом.
const foo = (arr,prinz) => {
    for (const item of arr) {
        if(item.footsize === prinz.shoes){
            return `I found you`
        }

    }
}
console.log(foo(prinses, pr));
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
const find = prinses.find(value => value.footsize === pr.shoes);
console.log(find);