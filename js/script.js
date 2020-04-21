'use strict';
let _this;
let cancel = document.getElementById('cancel');
let start = document.getElementById('start');
let butnPlusIncome = document.getElementsByTagName('button')[0];
let butnPlusExpenses = document.getElementsByTagName('button')[1];
let depCheck = document.querySelector('#deposit-check');
let additionalIncomeValue = document.querySelectorAll('.additional_income-item');
let budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
let budgetMonthValue = document.getElementsByClassName('budget_month-value')[0];
let expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
let additionalIncome = document.getElementsByClassName('additional_income-value')[0];
let additionalExpensesyValue = document.getElementsByClassName('additional_expenses-value')[0];
let incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
let targetMonthValue = document.getElementsByClassName('target_month-value')[0];
let salaryAmount = document.querySelector('.salary-amount');
let incomeTitle = document.querySelector('.income-title');
let additionalIncomeItem = document.querySelectorAll('.additional_income-item');
let expensesTitle = document.querySelector('.expenses-title');
let expensesItems = document.querySelectorAll('.expenses-items');
let additionalExpensesItem = document.querySelector('.additional_expenses-item');
let depositCheck = document.querySelector('#deposit-check');
let targetAmount = document.querySelector('.target-amount');
let periodSelect = document.querySelector('.period-select');
let incomeItems = document.querySelectorAll('.income-items');
let inputAll = document.querySelectorAll('[type = text]');


class AppData {
    constructor(){
    _this = this;
    this.budget= 0;
    this.budgetDay= 0;
    this.budgetMonth= 0;
    this.income= {};
    this.incomeMonth= 0;
    this.addIncome= [];
    this.expenses= {};
    this.expensesMonth= 0;
    this.addExpenses= [];
    this.deposit= false;
    this.percentDeposit= 0;
    this.moneyDeposit= 0;
    this.period= 3;
    }
}

AppData.prototype.reset = () => {
    for(let i = 0; i < inputAll.length; i++){
        inputAll[i].value = '';
        inputAll[i].readOnly  = false; 

    }
    cancel.style.display = 'none';
    start.style.display = 'block';
};

AppData.prototype.start = () => {
    salaryAmount.addEventListener('input', function(){
        if(salaryAmount.value === ''){
            start.disabled = true;
            return;
        } else {
            start.disabled = false;
        }
    });

    if(salaryAmount.value !== ''){
        cancel.style.display = 'block';
        start.style.display = 'none';
    } 
    for(let i = 0; i < inputAll.length; i++){
        inputAll[i].readOnly  = true; 
    }


    _this.budget = +salaryAmount.value;

    _this.getExpenses();
    _this.getIncome();
    _this.getExpensesMonth();
    _this.getAddExpenses();
    _this.getAddIncome(); 
    _this.getBudget();
    _this.showResult();

};

AppData.prototype.showResult = function(){
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = Math.ceil(this.budgetDay);
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesyValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    incomePeriodValue.value = this.calcSavedMoney();

   

};

AppData.prototype.addExpensensbLock = () => {

    const cloneExpensesItems = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItems, butnPlusExpenses);
    expensesItems = document.querySelectorAll('.expenses-items');
    if(expensesItems.length === 3){
        butnPlusExpenses.style.display = 'none';
}
};
AppData.prototype.addIncomeBlock = () =>{
    const cloneIncomeItems = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItems,butnPlusIncome);
    incomeItems = document.querySelectorAll('.income-items');
        if(incomeItems.length === 3){
            butnPlusIncome.style.display = 'none';
        }
};
AppData.prototype.periodSelectBlock = () =>{
    const periodAmount = document.querySelector('.period-amount');
    periodAmount.textContent = periodSelect.value;
    incomePeriodValue.value = _this.calcSavedMoney();
};
AppData.prototype.getExpenses =function(){
    expensesItems.forEach((item) =>{
        const itemExpenses = item.querySelector('.expenses-title').value;
        const cashExpenses = item.querySelector('.expenses-amount').value;
        if(itemExpenses !== '' && cashExpenses !== ''){
            _this.expenses[itemExpenses] = cashExpenses;
        }
    });
};
AppData.prototype.getIncome = function() {
    incomeItems.forEach((item)=>{
        const itemIncome = item.querySelector('.income-title').value;
        const cashIncome = item.querySelector('.income-amount').value;
        if(itemIncome !== '' && cashIncome !== ''){
            _this.income[itemIncome] = cashIncome;
        }
    });
    for(let key in _this.income){
        _this.incomeMonth += +_this.income[key];
    }
};
AppData.prototype.getAddExpenses = function() {
    const addExpenses = additionalExpensesItem.value.split(', ');
    addExpenses.forEach((item)=>{
        item = item.trim();
        if(item !== ''){
            _this.addExpenses.push(item);
        }
    });
};
AppData.prototype.getAddIncome = function(){
    additionalIncomeItem.forEach((item)=>{
        let itemValue = item.value.trim();
        if(itemValue !== ''){
            _this.addIncome.push(itemValue);
        }
    });
};
AppData.prototype.getInfoDeposit = () =>{
    this.deposit = confirm('Есть ли у вас депозит в банке?');
    if (this.deposit) {
        this.percentDeposit = prompt('Какой годовой процент?',"10");
        this.moneyDeposit = prompt('Какая сумма заложена?',100000);
    }
};
AppData.prototype.getExpensesMonth = function() {
    for (let key in this.expenses) {
        this.expensesMonth += +this.expenses[key];
    }

};
AppData.prototype.getBudget = function(){
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = this.budgetMonth/30;
};

AppData.prototype.getTargetMonth = function(){
    return targetAmount.value / this.budgetMonth;
};

AppData.prototype.getStatusIncome = () => {
    if (this.budgetDay >= 1200){
        return ('У вас высокий уровень дохода');
    }   else if ((this.budgetDay < 1200) || (this.budgetDay > 600)){
        return ('У вас средний уровень дохода');
        }
           else if ((this.budgetDay >=0) || (this.budgetDay <= 600)) {
            return ('К сожалению у вас уровень дохода ниже среднего');
            }   else if(this.budgetDay < 0) {
                return ('Что то пошло не так');
                }  
};
AppData.prototype.calcSavedMoney = function() {
   return this.budgetMonth * periodSelect.value;
};

AppData.prototype.addEventListener = function(){
    start.addEventListener('click', this.start);
    cancel.addEventListener('click', this.reset);
    butnPlusExpenses.addEventListener('click',this.addExpensensbLock);
    butnPlusIncome.addEventListener('click',this.addIncomeBlock);
    periodSelect.addEventListener('change', this.periodSelectBlock);
};
const appData = new AppData();

_this.addEventListener();
console.log(appData);

