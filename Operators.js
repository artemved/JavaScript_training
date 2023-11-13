// Операторы равенства

const secretNumber = '7';

if (Number(secretNumber) === 7) {
    console.log('Угадал строго');
}
if (secretNumber == 7) {
    console.log('Угадал не строго');
}

const q = Number(prompt('Введите число'));
if (q === 7) {
    console.log('!');
}

// Тернарные операторы

const bmwX3Price = 100000;
const fordFocusPrice = 10000;
const budget = 20000;

let massage;
if (budget > bmwX3Price) {
    massage = 'BMW';
} else if (budget > fordFocusPrice) {
    massage = 'Ford';
} else {
    massage = 'Велосипед';
}
console.log(`Я хочу купить ${massage}`);

let massage1 = budget > bmwX3Price ? 'BMW' : budget > fordFocusPrice ? 'Ford' : 'Велосипед';
console.log(`Я хочу купить ${massage1}`);

/* 
    Методом prompt получите ответ пользователя 
    на вопрос "Сколько будет 7 + или - 15". Если ответ верен
    введите в консоле "Успех", если нет - "Вы робот!",
    а если он введёт "Я не робот", то тоже "Успех"
*/

const res1 = prompt('Сколько будет 7 + или - 15');
switch (true) {
    case res1 === 'Я не робот':
    case Number(res1) === 22:
    case Number(res1) === -8:
        console.log('Успех!');
        break;
        default: 
        console.log('Вы робот!');
}

// Булева логика

const isAdmin1 = true;
const canWrite = true;

console.log(`Системный файл ${isAdmin1 && canWrite}`); // и
console.log(`Обычнный файл ${isAdmin1 || canWrite}`); // или
console.log(`Инвертируем права админа ${!isAdmin1}`); // не

const isEdited = true;
const isSuperAdmin = true;

console.log(`Системный файл с реактированием ${
    isAdmin1 && canWrite && (!isEdited || isSuperAdmin)
}`); // trut and true and (true)

// Операторы других типов

console.log('Вася' || 'Олег');
console.log(false || 'Олег');
console.log('Вася' || false);
console.log(false || false);

console.log('Вася' && 'Олег');
console.log(false &&'Олег');
console.log('Вася' && false);
console.log(false && false);

let a3 = 'Марина';
const userName1 = a3 || 'Петя';
console.log(userName1);

const isAdmin2 = true;
const filename = isAdmin2 && 'file.mp4';
console.log(filename);

// Оператор нулевого слияния

let age3 = 0;

console.log(age3 || 18);
console.log(age3 ?? 18);

/*
    Пользователь хочет приобрести игру в магазине
    Он может это сделать только если:
    - Его баланс больше 1000 (balance)
    или число бонусов больше 100 (bounesBalance)
    - Он не забанен (isBanned)
    - Игра не куплена (isExist)
    - Игра в продаже (isSelling)
    Напишите условие для покупки и выведите в консоль результат.
*/

const balance = 1200;
const bounesBalance = 90;
const isBanned = false;
const isExist = false;
const isSelling = true;

const canBuy1 = (balance > 1000 || bounesBalance > 100) && !isBanned && !isExist && isSelling
console.log(`Может купить ${canBuy1 ? 'Да' : 'Нет'}`);


const personOne = {
    name: 'Artem',
    age: 34
}

function increasPersonAge (person){
    person.age += 1;
    return person;
}
increasPersonAge(personOne);
console.log(personOne.age);

console.log(increasPersonAge(personOne.age));