'use strict';
// let money = prompt ('Ваш бюджет на месяц?', '20000');
// let time = prompt ('Введите дату в формате YYYY-MM-DD', '2019-05-19');


// let rashod1 = prompt ('Введите обязательную статью расходов в этом месяце', 'Комуналка');
// let sum1 = prompt ('Во сколько обойдется?', '5000');

// let rashod2 = prompt ('Введите обязательную статью расходов в этом месяце', 'Еда');
// let sum2 = prompt ('Во сколько обойдется?', '1000');





// let appData = {
//     familyBank: +money,
//     timeData: time,
//     expenses: {
//     expenses1: rashod1 + ':' + sum1,
//     expenses2: rashod2 + ':' + sum2
//     },
//     optionalExpenses: '',
//     income: [],
//     savings: false
// };

// let itog = parseInt((appData.familyBank - sum1 - sum2) / 30) + ' рублей на один день';

// alert(itog);
let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '20000');
    time = prompt('Введите дату в формате YYYY-MM-DD', '1983-02-11');

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '20000');
    }
}

start();    

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
            b = prompt('Во сколько обойдется?', '');
        
        if (typeof(a) === 'string' && 
            typeof(a) != null &&
            typeof(b) != null && 
            a != '' &&
            b != '' &&
            a.length < 60) {
    
            console.log('Done');
            appData.expenses[a] = b;
        } else {
            console.log ("Badly");
            i--;
        }
    }
}

chooseExpenses();

console.log(appData);

// Оформить расчет дневного бюджета и вывод на экран этого значения как одну функцию (detectDayBudget)

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();  // toFixed преобразовывает в строку и округляет число

    alert('Мой дневной бюджет ' + appData.moneyPerDay + ' руб.');
}

detectDayBudget();

// 2) Оформить блок кода с расчетом уровня достатка как отдельную функцию (detectLevel)

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка');
    } else {
        console.log('Сбой какой-то');
    }
}

detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какая сумма накоплений?', ''),
            percent = +prompt('Под какой процент?', '');
        
        appData.monthIncome = save / 100 / 12 * percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome + 'руб.');
    }
}

checkSavings();

// 3) Создать функцию для определения необязательных расходов (chooseOptExpenses):
// Необходимо 3 раза спросить у пользователя “Статья необязательных расходов?”
// Записать ответы в объект optionalExpenses в формате Номер - Ответ.
// optionalExpenses: {
//     1 : “ответ на вопрос”
// }
//Вызывать функции не обязательно.

function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
        let optExpenses = prompt('Статья необязательных расходов', '');

        appData.optionalExpenses[i] = optExpenses;
    }
}

chooseOptExpenses();

console.log(optExpenses())