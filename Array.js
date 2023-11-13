// Массивы 

const role1 = 'admin';
const role2 = 'user';
const role3 = 'superuser';

const roles = ['admin, user, superuser'];
const userInfo = ['Anna', 25];
console.log(roles);
console.log(roles[0]);  // - от 0 до ... выбрать элемент массива
console.log(roles.lenght); // - длина массива
console.log(roles[roles.lenght - 1]); // - последний элемент массива

console.log(roles.at(0)); // - от 0 до ... выбрать элемент массива (современный метод выбора)
console.log(roles.at(-1)); // - последний элемент массива (современный метод выбора)

const usersAge =[2040 - 2022, 20 - '6'];
const usersAge2 =[2040 - 2022, 10 > 0 ? 5 : 0];  // тернарный оператор в массиве
console.log(usersAge);
console.log(usersAge2);

const usersNames = new Array('Vasy', 'Pety', 'Katy'); // альтернативный способ объявить массив
console.log(usersNames);

const users2 = ['Anna', 'Vika', 'katy']; 
console.log(users2);
users2[2] = 'Kristina' // изменение массива
console.log(users2);
//users2[3] = 'Nikina' // добавление в массив, но не удобно и муторно
//console.log(users2);

users2.push('Nikita'); // добавление в массив
const arrLenght = users2.push('Nikita'); // добавление в массив + длина массива
console.log(users2);
console.log(arrLenght);

users2.unshift('Vasy'); // добавление в массив, в начало массива
console.log(users2);

const el = users2.pop(); // pop() удаление из массива поледний элемент
console.log(el); // возвращает удаленный элемент
console.log(users2);

const el2 = users2.shift(); // shift() удаление из массива первого элемента
console.log(el2); // возвращает удаленный элемент
console.log(users2);

const roles2 = ['user', 'admin', 'manager'];

const elIndex = roles2.indexOf('admin'); // indexOf поиск по массиву, если есть то 1 если нет то -1 
console.log(elIndex);
const elIndex2 = roles2.indexOf('superuser');
console.log(elIndex2);

if (roles2.indexOf('admin') >= 0) {
    console.log('Доступ есть');
}

console.log(roles2.includes('admin')); // includes поиск по ммассиву, если есть то true если нет то  false
console.log(roles2.includes('superuser'));

if (roles2.includes('admin')) {
    console.log('Доступ есть');
}

const roles3 = ['user', 'admin', 'manager', 'superuser'];
// Метод slice
const res2 = roles3.slice(2); // slice убирает все до 2 элемента 
console.log(roles3);
console.log(res2);

const res3 = roles3.slice(0, 2); // slice 0, 2 выбирает от 0 элемента по 2 не включая его 
console.log(res3);

const res4 = roles3.slice(-1); // slice -1 выбирает последние элемент 
console.log(res4);

const res5 = roles3.slice(1, -2); // slice 1, -2 выбирает с 1 по предпоследний не включительно
console.log(res5);

// const res6 = roles3.splice(2); // splice выбирает со второго элемента и меняет маси вырезая их
// console.log(res6);
// console.log(roles3);

const res7 = roles3.splice(2, 1); // splice 2, 1 выбирает со второго элемента 1 элемент и вырезает его из массива
console.log(res7);
console.log(roles3);

const res8 = roles3.reverse(); // переварачивает массив и модифицирует массив
console.log(roles3);
console.log(res8);

const newroles = ['sysadmin', 'developer']; // concat объединяет масивы 
const res9 = roles3.concat(newroles);
console.log(res9);

const roles4 = ['user', 'admin', 'manager', 'supeuser'];

const url = 'auth/user/login';
const res10 = url.split('/'); // split разбивает строку по выбранному / и приобразует в массив
console.log(res10);

console.log(roles4.join('-')); // join объединяет массив в строку через выбранный -

/*
    Дан список задач 
    const tassks = ['Задача 1'];
    Сделать функцию:
    - Добавление задачи в конец
    - Удаление задачи по названию
    - перенос задачи в начало по названию
    Всегда меняем исходный массив
*/

const tasks = ['Задача 1'];

// Добавление задачи в конец
function Add(task) {
    tasks.push(task); 
}

// Удаление задачи по названию
function Remove(task) {
    const index = tasks.indexOf(task); 
    if (index === -1) {
        return;
    }
    return tasks.splice(index, 1);
}

//перенос задачи в начало по названию
function Prioritize(task) {
    const result = Remove(task); 
        if (!result) {
        return;
        }
        tasks.unshift(result[0]);
}

Add('Задача 2');
Add('Задача 3');
console.log(tasks);
Remove('Задача 2');
console.log(tasks);
Prioritize('Задача 3');
console.log(tasks);

// Деструкторизация

const userData1 = ['Anna', 22, 'Moscow'];

function getData() {
return ['Anna', 22, 'Moscow'];
}
// получить данные из массива
//const userName2 = getData()[0];
//const age4 = getData()[1];
//const city1 = getData()[2];

const [userName2, _, city1] = userData1;

console.log(userName, city);

// Рест оператор (оператор применятся только в конце)

const data = [1, 2, 3, 4, 5, 6];
const [one, two, ...others] = data;
console.log(one, two, others);

/*
    Дан произвольный url - 
    'https://purpleschool.ru/course/javascript'
    Нужно сделать функцию, которая выводит в консоль:
    - Протокол (https)
    - Доменное имя (purpleschool.ru)
    - Путь внутри сайта (/course/javascript)
*/

const url1 = 'https://purpleschool.ru/course/javascript';

function getURLParts(url1){
    const [protocol, _, host, ...path] = url1.split('/');
    console.log(protocol, _, host, path);
    console.log(`Протокол: ${protocol.split(':')[0]}`);
    console.log(`Доменное имя: ${host}`);
    console.log(`Путь внутри сайта: /${path.join('/')}`);
}

getURLParts(url1);