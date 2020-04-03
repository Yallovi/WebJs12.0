'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}

let money,
    income = ('freelance'),
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = (10000),
    period = 4; 

let start = function() {
    do{
        money = prompt('Ваш месячный доход?') 
    }
    while(!isNumber(money));

};

start();


let showTypeOf = function(item){
    console.log(typeof(item));
};  

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let expenses = [];



console.log(addExpenses.toLowerCase().split(' ,'));


let getExpensesMonth = function(){

    let sum = 0, check = 0;   

    for (let i = 0; i < 2; i++){
        expenses[i] = prompt('Введите обязательную статью расходов?');
        do {
            check = prompt('Во сколько это обойдется?');
        }
        while (!isNumber(check));
        sum += check;
    }
    console.log(expenses);
    return sum;
};

let expensesAmount = getExpensesMonth();

console.log('Расходы за месяц ' + expensesAmount);

let getAccumulatedMonth = function(){
    return money - expensesAmount;
};


let accumulatedMonth = getAccumulatedMonth();

let getTargetMonth = function() {
    return mission / accumulatedMonth;
};

let budgetDay = accumulatedMonth / 30;

if(getTargetMonth() < 0){
    console.log('Цель не будет достигнута');
} else {
    console.log('Цель будет достигнута за ' + Math.ceil(getTargetMonth()) + ' месяца');
}


let getStatusIncome = function(){
    if (budgetDay >= 1200) {
        return('Уровень дохода высокий');
    } else if ((budgetDay < 1200) || (budgetDay > 600)) {
        return('Cредний доход');
    } else if ((budgetDay >=0 ) || (budgetDay <= 600)) {
        return('К сожалению, у вас уровень дохода ниже среднего');
    } else if (budgetDay < 0) {
        return('Что-то пошло не так');
    }
};

console.log(getStatusIncome());






// 2) Добавить проверку что введённые данные являются числом, которые мы получаем на вопрос 'Во сколько это обойдется?’ в функции  getExpensesMonth























// 8) Проверить, чтобы все работало и не было ошибок в консоли



// 9) Добавить папку с четвертым уроком в свой репозиторий на GitHub