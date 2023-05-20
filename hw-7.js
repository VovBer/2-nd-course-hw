// Задание 1 Преобразуйте строку js в верхний регистр JS.

let str = 'Здесь ТЕксТ, Введенный польЗоВАТЕлеМ'.toUpperCase();
console.log(str);

// Задание 2 Создайте функцию, которая в качестве параметров принимает массив строк и строку. Возвращать данная функция должна новый массив, содержащий только те элементы переданного массива, которые начинаются с переданной строки. Регистр символов не должен влиять.

function searchStart(array, string) {
    return array.filter((obj) => obj.toLowerCase().startsWith(string.toLowerCase()))
} 
console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));

// Задание 3 Округлите число 32.58884:
// До меньшего целого
// До большего целого
// До ближайшего целого

const numb = 32.58884;
console.log(Math.floor(numb));
console.log(Math.ceil(numb));
console.log(Math.round(numb));

// Задание 4
//Даны числа 52, 53, 49, 77, 21, 32. Необходимо найти среди этих чисел наименьшее и наибольшее числа и вывести их в консоль.

console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log(Math.min(52, 53, 49, 77, 21, 32));

// Задание 5
// Создайте функцию, которая будет выводить в консоль рандомное число от 1 до 10.

function getRandomInt(minValue, maxValue) {
return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}

console.log(getRandomInt(1, 10));

// Задание 6
// Напишите функцию, которая будет принимать на вход целое число, а возвращать массив случайных целых чисел от 0 до переданного числа. Длина массива должна быть в 2 раза меньше переданного числа.

function getRandomArrNumbers(maxNumb) {
    const arrayNumb = [];
    let lengthNumb = Math.round(maxNumb / 2);
    for (let i = 0; i < lengthNumb; i++) {
        arrayNumb.push(Math.round(Math.random() * maxNumb)); // заполнение массива
        
    }
    console.log(arrayNumb);    
}

getRandomArrNumbers(8);
getRandomArrNumbers(7);
getRandomArrNumbers(13);

// Задание 7
// Напишите функцию, которая на вход принимает 2 целых числа, а в качестве результата возвращает случайное целое число в этом диапазоне.

console.log(getRandomInt(40, 60));

// Задание 8
// Выведите в консоль текущую дату в стандартном режиме. Используйте один из трех рассмотренных в уроке способов.

let myDate = new Date();
console.log(myDate);

// Задание 9
// Создайте переменную currentDate и сохраните в нее текущую дату. Выведите дату, которая наступит через 73 дня после текущей.

let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

// Задание 10
// Написать функцию, которая на вход принимает дату, а возвращает ее отображение в виде:
// Дата: <число> <месяц на русском> <год> - это <день недели на русском>.
// Время: <часы>:<минуты>:<секунды>
// Время, которое будет выведено, также хранится в объекте Date.

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let myDate1 = new Date();
let hour = myDate1.getHours(); // получаем час из нашей даты
let minute = myDate1.getMinutes(); // получаем минуты
let second = myDate1.getSeconds(); // получаем секунды

let fullDate = "Сегодня: " + myDate1.getDate() + " " + months[myDate1.getMonth()] + " " + myDate1.getFullYear() + ", " + days[myDate1.getDay()] + " Время: " + myDate1.getHours() + ":" + myDate1.getMinutes() + ":" + myDate1.getSeconds();

console.log(fullDate);

// Задание 7-11 Дан массив слов: ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'].
// Необходимо перемешать элементы массива и вывести на экран пользователю с использованием alert();
//Спросить у пользователя:
//Чему равнялся первый элемент массива?
//Чему равнялся последний элемент массива?
//Поздравить пользователя, если он угадал оба элемента.
//Если пользователь угадал только одно слово, сообщить: «Вы были близки к победе!»
//Если не угадал ни одного элемента, сообщить, что пользователь ответил неверно.
 
let fruitsArray = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
fruitsArray = fruitsArray.sort(() => Math.random() - 0.5);
alert(fruitsArray);

let ansver = prompt('Чему равнялся первый элемент массива?');
let ansver1 = prompt('Чему равнялся последний элемент массива?');

if (ansver.toLowerCase == fruitsArray[0].toLowerCase && ansver1.toLowerCase == fruitsArray[6].toLowerCase) {
    alert('Поздравляю!!!');   
} else if (ansver.toLowerCase !== fruitsArray[0].toLowerCase && ansver1.toLowerCase !== fruitsArray[6].toLowerCase) {
    alert('Не угадал!');
} else {
    alert('Вы были близки к победе!');
}

