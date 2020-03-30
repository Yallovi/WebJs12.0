'use strcit';

let money = prompt('Ваш месячный доход?'),
    income = ('freelance'),
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    expenses1 = prompt('Обязательная статья расходов : '),
    amount1 = prompt('Во сколько это обойдется?'),
    expenses2 = prompt('Ообязательная статья расходов : '),
    amount2 = prompt('Во сколько это обойдется?'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    budgetMonth = (parseInt(amount1) + parseInt(amount2)),
    mission = (1000),
    period = 4,
    countMonth,
    budgetDay;
money = (money - budgetMonth);
countMonth = Math.ceil(mission / money);


console.log(typeof (money));
console.log(typeof (income));
console.log(typeof (deposit));
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев.', 'Цель заработать ' + mission + ' долларов');
console.log(addExpenses.toLowerCase().split(', '));
budgetDay = (money / 30;)
console.log('Дневной бюджет: ' + budgetDay);
console.log('Бюджет на месяц :' + budgetMonth);
console.log('Количество месяцев : ' + countMonth);


if (budgetDay >= 1200) {
    alert('Уровень дохода высокий');
} else if ((budgetDay < 1200) || (budgetDay > 600)) {
    alert('Cредний доход');
} else if ((budgetDay >=0 ) || (budgetDay <= 600)) {
    alert('К сожалению, у вас уровень дохода ниже среднего');
} else if (budgetDay < 0) {
    alert('Что-то пошло не так');
}

