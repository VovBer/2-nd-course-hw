// Задание 1 С помощью метода массива sort отсортируйте массив people по возрастанию возраста и выведите их в консоль.

const people = [

    { name: 'Глеб', age: 29 },
  
    { name: 'Анна', age: 17 },
  
    { name: 'Олег', age: 7 },
  
    { name: 'Оксана', age: 47 }
  
  ];
  
  console.log(people.sort((a, b) => a.age - b.age));
  
  // 2 Реализуйте функцию filter, которая должна работать аналогично методу массива `filter. За основу возьмите функцию map, которую мы реализовывали на уроке. Чтобы из функции map сделать filter, нужно, в зависимости от результата вызова ruleFunction, принимать решение о том, добавлять в результирующий массив очередной элемент или нет. Возьмите за основу код ниже. Задание считается выполненным, если два console.log в коде выводят правильное значение:
  
  function isPositive(number) {
    return number > 0;
    }
    function isMale(word) {
    return word.gender === 'male';
    }
    function filter(arr, ruleFunction) {
    const output = [];
  
    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) {
            output.push(arr[i]);
        }
      }
    
      return output;
    }
    
    console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
    
    const people1 = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
    
    console.log(filter(people1, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]
  
  // 3 Напишите программу, которая на протяжении 30 секунд каждые 3 секунды будет выводить в консоль текущую дату. Последней строкой должно выводиться сообщение «30 секунд прошло».
  
  function allDate(c, e) {
    let resultDate1 = setInterval(() => {
      let myDate1 = new Date();
      console.log(myDate1);
    }, c);
    
    setTimeout(() => {
      clearInterval(resultDate1); console.log('30 секунд прошло');
    }, e);
    }
    
  allDate(3000, 30000);
  
  // 4 Сейчас код ниже выводит в консоль «Привет, Глеб!» сразу после запуска.
  //Допишите функцию edlayForSecond так, чтобы приветствие выводилось в консоль не сразу, а спустя 1 секунду. Используйте setTimeout.
  
  function delayForSecond(callback) {
    setTimeout(() => {
      console.log(callback());
    }, 1000);
  }
  
  delayForSecond(function () {
    console.log('Привет, Глеб!');
  })
  
  // 5 Посмотрите код. В нём допущена ошибка, и он выводит сообщения не в том порядке:
  
  //Привет, Глеб!
  //Прошла одна секунда
  //Правильный порядок:
  
  //Прошла одна секунда
  //Привет, Глеб!
  //Исправьте код, чтобы он выводил сообщения в правильном порядке:
  
  function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
  
    }, 1000)
  }
  
  // Функция sayHi выводит в консоль приветствие для указанного имени
  function sayHi (name) {
    console.log(`Привет, ${name}!`);
  }
  
  // Код выше менять нельзя
  
  // Нужно изменить код ниже:
  delayForSecond(() => sayHi('Глеб'));
  
  