// 1
let password = 'пароль';
let answer = prompt('Введите пароль');

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
let Numbera = 2;
let Numberb = 3;
alert(Numbera+Numberb);
// 5
let monthNumber = Number(prompt('Введите номер месяца в году'));

switch (monthNumber) {
    case 1:
    case 2:
    case 12:    
        alert('Зима');
        break;
    case 3:
    case 4:
    case 5:
        alert('Весна');
        break;
    case 6:
    case 7:
    case 8:
        alert('Лето');
        break;
    case 9:
    case 10:
    case 11:
        alert('Осень');
        break;                    

    default:
        alert('номер месяца больше 12')
        break;
}
// 7
const userNumber = +prompt('Пожалуйста, введите любое число');

if (isNaN(userNumber)) {
    alert('Некорректное значение!');
} else if (userNumber % 2 == 0) {
    alert('Число четное');
} else {
    alert('Число нечетное');
}
// 8
let clientOS = 0;
let clientAndroid = 1;
let client = Number(prompt('Введите 0 если у Вас iOs, введите 1 если у Вас android'));

if (client === clientOS) {
    alert('Установите версию приложения для iOS по ссылке');
} else {
    alert('Установите версию приложения для Android по ссылке');
}