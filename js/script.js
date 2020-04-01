'use strict';   
let money = prompt('Ваш месячный доход?',6000),
    income = ('freelance'),
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = (10000),
    period = 4;


let showTypeOf = function(item){
    console.log(typeof(item));
};  

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);



let expenses1 = prompt('Обязательная статья расходов : '),
    amount1 = prompt('Во сколько это обойдется?',2500),
    expenses2 = prompt('Ообязательная статья расходов : '),
    amount2 = prompt('Во сколько это обойдется?',1500);

console.log(addExpenses.toLowerCase().split(' ,'));


let getExpensesMonth = function(){
    return (+amount1) + (+amount2);
};

console.log('Расходы за месяц ' + getExpensesMonth());

let getAccumulatedMonth = function(){
    return money - getExpensesMonth();
};


let accumulatedMonth = getAccumulatedMonth();

let getTargetMonth = function() {
    return mission / accumulatedMonth;
};

let budgetDay = accumulatedMonth / 30;

console.log('Цель будет достигнута за ' + Math.ceil(getTargetMonth()) + ' месяца');


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




















// 8) Проверить, чтобы все работало и не было ошибок в консоли



// 9) Добавить папку с четвертым уроком в свой репозиторий на GitHub