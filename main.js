const date  = new Date();
const getWeekDays= ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота',];

if((date.getHours() >= 23) || (date.getHours() <= 5)){
    console.log( 'Доброй ночи');
}
else if((date.getHours() >= 5) || (date.getHours() <= 10)){
     console.log( 'Доброе утро');
}
else if((date.getHours() >= 11) || (date.getHours() <= 16)){
    console.log( 'Добрый день');
}
else if((date.getHours() >= 17) || (date.getHours() <= 22)){
    console.log( 'Добрый вечер');
}

console.log('Сегодня ' + getWeekDays[date.getDay()]);


console.log('Текущее Время: ' + date.getHours() + ':' + date.getMinutes()+ ':' + date.getSeconds());

let deadline = ('31 december 2020 '),
    stopDeadline = new Date(deadline).getTime(),
    dateNow = date.getTime();

console.log('До нового года осталось ' + Math.ceil((stopDeadline - dateNow) / 1000 / 60 / 60 / 24) + ' дней');