'use strict';

let lang = 'en',
    ruDay = ('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье'),
    enDay = ('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'),
    name1 = 'Артем',
    name2 = 'Максим';


if (lang === 'ru') {
    console.log(ruDay);
} else if (lang === 'en'){
    console.log(enDay);
} else{
    console.log('Что-то пошло не так!');
}



switch (lang){
    case 'ru':
        console.log(ruDay);
        break;
    case 'en':
        console.log(enDay);
        break;
    default:
        console.log('Что-то пошло не так!');
    
}


let namePerson = name1 === 'Артем' ? 'Директор': 'студент';
console.log('namePerson: ', namePerson);
let namePerson1 = name2 === 'Максим' ? 'Преподаватель': 'студент';
console.log('namePerson1: ', namePerson1);


