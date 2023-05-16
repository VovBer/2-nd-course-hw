// Задание 1 Дан массив: [1, 5, 4, 10, 0, 3].

// Необходимо создать цикл, который будет выводить элементы массива до тех пор, пока не встретит значение 10.

// После вывода значения 10 в консоль цикл должен прекратить свою работу.

const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++ ) {
    console.log(numbs[i]);         // сначало выводим текущее значение, потом прерываем...
    if (numbs[i] == 10) {
        break;
    }
}

// Задание 2 Дан массив: [1, 5, 4, 10, 0, 3]. Найдите позицию числа 4 в этом массиве.

const fourNumber = [1, 5, 4, 10, 0, 3];

console.log(fourNumber.indexOf(4));

// Задание 3 Дан массив чисел: [1, 3, 5, 10, 20]. С помощью метода join выведите элементы массива через пробел (пустую строку ' ').

const allNumbers = [1, 3, 5, 10, 20];

console.log(allNumbers.join(' '));

// Задание 4 С помощью вложенных циклов создайте многомерный массив вида: [[1, 1, 1], [1, 1, 1], [1, 1, 1]].

const arr = [];
for (let a = 0; a < 3; a++) {  // создаем подмассив
    arr[a] = [];             
    for (let b = 0; b < 3; b++) { // заполняем подмассив числами
        arr[a][b] = 1;
    } 
}

console.log(arr);

// Задание 5 Дан массив:[1, 1, 1]. Добавьте в конец массива значения 2, 2, 2.

const arrOne = [1, 1, 1];
arrOne.push(2, 2, 2);

console.log(arrOne);

// Задание 6 Дан массив: [9, 8, 7, 'a', 6, 5]. С помощью метода sort отсортируйте массив и удалите букву 'a' из данного массива. В результате работы программы вывести массив, состоящий из цифр.

let arrTwo = [9, 8, 7, 'a', 6, 5];
arrTwo = arrTwo.sort()
console.log(arrTwo);
console.log(arrTwo.pop());
console.log(arrTwo);

// Задание 7 Дан массив: [9, 8, 7, 6, 5]. Пользователь с клавиатуры вводит число от 1 до 10 (использовать 
// prompt()). Необходимо проверить, содержится ли введенное пользователем число в данном массиве.

let questNumbs = Number(prompt('Введите число от 1 до 10'));

const answerNumbs = [9, 8, 7, 6, 5];

let search = answerNumbs.includes(questNumbs);

console.log(search);
// Задание 8 Дана строка: 'abcdef'. Необходимо, чтобы программа вывела в консоль 'fedcba'.

let string = 'abcdef';
console.log(string.split('').reverse().join(''));

// Задание 9 Дан массив: [[1, 2, 3,],[4, 5, 6]]. Выведите в консоль массив вида: [1, 2, 3, 4, 5, 6].
// 1-й способ:
const oldArr = [[1, 2, 3,],[4, 5, 6]];
const newArr = [...oldArr[0], ...oldArr[1]]; // оператор spred
console.log(newArr);
// 2-й способ:
const oldArr1 = [[1, 2, 3,],[4, 5, 6]];
const newArr1 = oldArr1.flat();              // оператор flat
console.log(newArr1);

// Задание 10 Создайте массив с произвольными числами (диапазон от 1 до 10). Переберите его с помощью цикла for и в каждой итерации выведите в консоль сумму текущего и следующего элементов массива. Следующий элемент массива можно получить с помощью индекса: i + 1. Обратите внимание, что у последнего элемента нет следующего.

const bigArr = [1, 2, 4, 5, 9];
for (let i = 0; i < bigArr.length - 1; i++) {
    let sum = bigArr[i] + bigArr[i + 1];
    console.log(sum);
}

// Задание 11 Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив квадратов этих чисел.

const variousNumbers = [2, 3, 4, 7];
function squareArr(variousNumbers) {
    return variousNumbers.map(number =>(number ** 2));
}

console.log(squareArr(variousNumbers));

// Задание 12 Создайте функцию, которая принимает на вход массив строк, а возвращает массив длинны слов.

function getLengthWords(Words) {
    return Words.map((it) =>it.length);
}
const wordsLenght = getLengthWords(['acascac', 'acascac', 'acasscac']);

console.log(wordsLenght);

// Задание 13 Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив содержащий только отрицательные значения.

function filterPositive(array) {
    return array.filter((el) => el < 0);
  }

let negNumbers = filterPositive([-1, 0, 5, -10, 56]);

console.log(negNumbers);

// Задание 14 Создайте массив, состоящий из 10 значений. Значения массива необходимо сгенерировать с помощью метода Math.random() в диапазоне от 0 до 10.
// В данном массиве найдите все четные значения и добавьте их в новый массив. Результат работы программы необходимо вывести в консоль — это будет два массива: исходный массив и массив с четными значениями.

let arrayRound1 = [];
for (let i = 0; i < 10; i++) {
    arrayRound1.push(Math.round(Math.random() * 10));    
}

console.log(arrayRound1);

function getEvenNumber() {
    return arrayRound1.filter((el) => el % 2 == 0);
}

console.log(getEvenNumber());
