// Циклы for(1, 2, 3){} 1-обозначить переменную, 2-когда закончится цикл, 3-что должен сделать цикл.
for(let a = 1; a < 10; a++){
    console.log(`Наш баланц ${a}$`);
    }
    console.log('--------------------')
// Break and continue (Break - остогавливает цикл continue - пропустить итерацию перейти к следующей)
// tasks.length - длина массива
const tasks = ['Задача 1', 'Задача 2' , 'Задача 3'];

for(let i = 0; i < tasks.length; i++) {
    if(tasks[i] === 'Задача 2') {
    continue;
    }
    console.log(tasks[i]);
}
console.log('--------------------')
for(let i = 0; i < tasks.length; i++) {
    if(tasks[i] === 'Задача 2') {
    break;
    }
    console.log(tasks[i]);
}
/*
    Задача вывести в консоль строку "Я люблю JS !" из массива,
    проход цилом в обратном порядке, не используя метод reverse,
    const arr = ['!', 'JS', 'люблю', 'Я'];
*/
const arr = ['!', 'JS', 'люблю', 'Я'];
const resultArray = []; // Вспомогальный массив куда добовлять элементы

for(let b = arr.length - 1; b >= 0; b--){
    resultArray.push(arr[b]);
}
console.log(resultArray.join(' '));

// Если бы можно использовать reverse то:
console.log(arr.reverse().join(' '));

// Цикл в цикле (первый выполнятся 1 итерацию второй все итерации первый выполняется 2 итерацию второй все итерации)

for(let c = 1; c < 5; c++){
    console.log(`Цикл 1 - ${c}`);
    for(let j = 1; j < 5; j++){
        console.log(`Цикл 2 - ${j}`);
    }
}
// Массив в массиве
const tasksA =[[1, 'Задача 1', 2, 'Задача 2']];

for(let d = 0; d < tasksA.length; d++){
    for(let f = 0; f < tasksA[d].length; f++){
        console.log(tasksA[d][f]);
    }
}
// Цикл while

for(let g = 1; g < 5; g++){
    console.log(`Вывод - ${g}`);
    }

let g = 1;
while(g < 5){
    console.log(`Вывод - ${g}`);
    g++
}

const arrA = [1, 4, 8, 7];

for(let h = 0; h < arrA.length; h++){
    if (arrA[h] > 5) {
    break;
    }
    console.log(arrA[h]);
    }

let h = 0;
while (arrA[h] <= 5 && h < arrA.length){
    console.log(arrA[h]);
    h++;
}