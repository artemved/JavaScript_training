let a = 1
console.log(a);
a = 'Test';
console.log(a);
// Базовые арифметические операторы

/*
    Две
    строки
*/
const width = 10; // ширина квадрата = 10
const height = 5; // высота квадрата = 5
const space = width * height;
const newWidht = width - 4;
const newWidht2 = width + 4;
const division = newWidht / newWidht2; // деление
const volume = 2 * 2 * 2;
const volume1 = 2 ** 3; // два в степени три 2 * 2 * 2
console.log(volume1);

// Строки
const city = "Москва";
const street = "Новослободская";
console.log(city + ', ' + street + ' '+ 5); // Москва, Новослоботская 5 (конкотенация)

// Операторы присваивания
let age = 18 + 5;
age += 2; // age = age + 2
age -= 3; // age = age - 2
age *= 2; // age = age * 2
age /= 2; // age = age / 2

age ++; // age = age + 1
age --; // age = age - 1

console.log(age);

// Операторы сравнения
const vasia = 20;
console.log(age > vasia);
console.log(age >= vasia);
console.log(age < vasia);
console.log(age <= vasia);
console.log(age == vasia);

// Порядок операторов
const isSuited = 100 - 10 > 90 - 5;
console.log(isSuited);
const b = (6 + 10) / 2;
console.log(b);

let c;
let d;
d = c = 100 + 50 + 30;
console.log(c);
console.log(d);

// Типы данных
let a1 = 5;
let b1 = 5.6;
console.log(typeof a1);
console.log(typeof b1);
a1 = 'строка';
console.log(typeof a1);
e = 'sdfsf';
console.log(typeof e);
let isAdmin = false;
console.log(typeof isAdmin);

let c1;
console.log(typeof c1);
c1 = 5;
console.log(typeof c1);

let d1 = null;
console.log(typeof d1);
console.log(d1 == null);
console.log(typeof (d1 == null));

/*
Ваша часовая ставка 80$ и вы готовы работать не 
более 5 часов в день 5 дней в неделю (кроме выходных)
К вам приходит заказчик и предлагает заказ на 40
часов работы
Сейчас понедельник 
Вы должны уехать черех 11 дней 
Вывести в консоль:
- Boolean переменную успеете ли вы взяться за работу
- Сколько вы за нее попросите
*/

// Данные
const payReatUSD = 80;
const projictHours = 40;
const availablHours = (11 - 2) * 5;

// Результат
console.log('Смогу ли я работать? ' + (availablHours > projictHours));
console.log('Стоимость работ: ' + projictHours * payReatUSD + '$');

// Шаблонные строки
const projectName = 'Сайт магазина';
const price = 2000;
const author = 'Василий Пупкин';
const template = author + ' заказал ' + projectName + ' по цене ' + price + '$';
console.log(template);

const template2 = `${author} заказал ${projectName} по цене ${price}$`;
console.log(template2);

const template3 = 'Проект \n' + 'Цена: ' + price + '$'; // \n - перенос на след. строку
console.log(template3);

const template4 = `Проект
Цена: ${price}$`;
console.log(template4);

// Преоброзование типов
const age1 = '18';
console.log(Number(age1) + 5);
console.log(age1 - 3);

const userName = 'Вася';
console.log(Number(userName) + 5);
console.log(typeof NaN);
console.log(String(4) + 7);
console.log(Boolean(1));
console.log(Boolean(''));

const a2 = 2 + '10';
console.log(a2 - 10);

// False из других типов
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(Number('sx')));
console.log(Boolean(NaN));

// If eles
const money = 100;
const canBuy = money > 50;

if (money > 50) {
console.log('Может купить наш продукт');
} else if (money > 55) {
console.log('Куплен мини продукт');
} else {
    console.log('Не хватает баланса');
}
console.log('Итог')

/*
    Васи положили 12 000$ на вклад 7% годовых с
    капитализацией 1 раз в месяц.
    Вывести в консоль, сможет ли он купить дом за 13 500$ 
    через 2 года после снятия вклада. И остаток после покупки.

    Итог = Сумма * (1 + Ставка в месяц не в %) ^ срок в меяцах
*/

const deposit = 12000;
const rate = 0.07;
const depositLenght = 24;
const houseCost = 13500;

const res = deposit * (1 + rate / 12) ** 24;
if (res > houseCost) {
    console.log(`Мы накопили ${res}. Можем купить. Остаток ${res - houseCost}`);
} else {
    console.log(`Мы накопили ${res}. Купить не сможем (((`);
}

// Switch

const role = 'manager';

if (role === 'manager') {
    console.log('Менеджер');
} else if (role === 'admin') {
    console.log('Админ');
}else if (role === 'ceo') {
    console.log('СЕО');
} else {
    console.log('Мы тебя не знаем!');
}

switch (role) {
    case 'manager':
        console.log('Менеджер');
        break;
    case 'admin':
        console.log('Админ');
        break;
    case 'ceo':
        console.log('СЕО');
        break;
}

switch (role) {
    case 'manager':
    case 'admin':
        console.log('Не руководитель');
        break;
    case 'ceo':
        console.log('Руководитель');
        break;
}

const num = 1;

switch (true) {
    case num > 0:
        console.log('Положительный');
        break;
    case num < 0:
        console.log('Отрицательный');
        break;
    default:
        console.log('Ноль!')
}