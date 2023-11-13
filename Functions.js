// Функции

function fromMilesToKm (miles) {
    const km = miles / 0.62137;
    return km;
    }
    
    function logName(name, surname) {
        console.log(`Моё имя ${name} ${surname}`);
    }
    logName('Артём', 'Ведменский');
    
    function countDepositSum(depositUSD, month, rate) {
        const sum = deposit * (1 + rate / 12) ** month;
        return sum;
    }
    const example1 = countDepositSum (1000, 24, 0.12);
    console.log(example1);
    
    const example2 = countDepositSum (1200, 48, 0.07);
    console.log(example2);
    
    
    // Анонимные функции
    
    const powt = function(num) {
        return num * num;
    }
    console.log(powt(6));
    
    
    // Стрелочные функции
    
    const poft = num => num * num;
    console.log(poft(6));
    
    /* Переписать функцию в стрелочную */
    
    function toPower(num, power) {
        const res = num ** power;
        return res;
    }
    console.log(toPower(2, 3));
    
    const toPowerArrow = (num, power) => num ** power;
    console.log(toPowerArrow(2, 3));
    
    // Параметры по умолчанию 
    
    function toPower(num, power = 2) {
        const res = num ** power;
        return res;
    }
    console.log(toPower(2, 3));
    console.log(toPower(2));
    
    // Условия в функциях
    
    function canAccessWebSite(age) {
        if (age < 18) {
            return 'No';
        }
        return 'Yes';
    }
    console.log(canAccessWebSite(19));
    
    const canAccessWebSite2 = age => age < 18 ? 'No' : 'Yes';
    console.log(canAccessWebSite2(19));
    
    // Функция в функциях
    
    const KG_IN_USD = 7;
    const KM_IN_USD = 5;
    
    function calculateW(present) {
        return present * KG_IN_USD;
    }
    
    function calculateKm(distance) {
        return distance * KM_IN_USD;
    }
    
    function getExchangePrice(present1, present2, distance) {
        const price1 = calculateW(present1);
        const price2 = calculateW(present2);
        const distancePrice = calculateKm(distance);
        return price1 + price2 + distancePrice;
    }
    console.log(getExchangePrice(1, 2, 10));
    
    /* 
    Пользователь:
    - Возраст
    - Наличие работы
    - Деньги
    Нужно проверить может ли он купить новый MacBook за 2000$?
    Он может брать не только свои деньги но и взять кредит
    Ему дадтут 500$ только если ему больше 24-х лет и он 
    имеет работу 100$ если ему просто больше 24-х лети 0 в ином случаии
    Напишите функцию которая принемает данные пользователя 
    и товар и возвращает true или false
    */
    
    function computerCredit(age, hasJob = false) {
        switch (true) {
            case age > 24 && hasJob:
                return 500;
            case age > 24:
                return 100;
            default:
                return 0;
        }
    }
    
    function canBuy2(productPrice, age, money, hasJob = false){
        const creditMoney = computerCredit(age, hasJob);
        return productPrice <= money + creditMoney;
    }
    
    console.log(canBuy2(2000, 25, 1500, true));