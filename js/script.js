var money = 4000000,
    income = ('freelance'),
    addExpenses = ('internert, taxi, food'),
    deposit = (true),
    mission = (10000000000),
    period = 4,
    budgetDay;


console.log(typeof (money));
console.log(typeof (income));
console.log(typeof (deposit));
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев.', 'Цель заработать ' + mission + ' долларов');
console.log(addExpenses.toLowerCase().split(', '));
budgetDay = money / 30;
console.log('Дневной бюджет: ' + budgetDay);