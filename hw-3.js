// 1
let password = 'пароль';
let answer = String(prompt('Введите пароль'));

if (answer === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}
// 2
let c = 7;

if (c>0 && c<10) {
    alert('Верно');
} else {
    alert('Неверно');
}
// 3
let d = 20;
let e = 120;
if (d>100 || e>100) {
   alert('Верно') 
} else {
   alert('Неверно') 
}
// 4
let a = '2';
let b = '3';
a = 2;
b = 3;
alert(a+b);
// 5
let monthNumber = Number(prompt('Введите номер месяца в году'));

switch (monthNumber) {
    case 1:
        alert('Зима');
        break;
    case 2:
        alert('Зима');
        break;
    case 3:
        alert('Весна');
        break;
    case 4:
        alert('Весна');
        break;
    case 5:
        alert('Весна');
        break;
    case 6:
        alert('Лето');
        break;
    case 7:
        alert('Лето');
        break;
    case 8:
        alert('Лето');
        break;
    case 9:
        alert('Осень');
        break;
    case 10:
        alert('Осень');
        break;
    case 11:
        alert('Осень');
        break;
    case 12:
        alert('Зима');
        break;                    


    default:
        alert('номер месяца больше 12')
        break;
}