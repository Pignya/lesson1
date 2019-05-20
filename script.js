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


function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();  

    alert('Мой дневной бюджет ' + appData.moneyPerDay + ' руб.');
}

detectDayBudget();


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


function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
        let optExpenses = prompt('Статья необязательных расходов', '');

        appData.optionalExpenses[i] = optExpenses;
    }
}

chooseOptExpenses();
