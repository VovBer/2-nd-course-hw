// 1
let a = 0;
while (a < 2) {
    alert('Привет');
    a++;
}

// 2
let b = 1;
while (b <= 5) {
    alert(b);
    b++;
}

// 3
let c = 7;
while (c <= 22) {
    alert(c);
    c++;
}

// 4
const obj = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400,
}
for (key in obj) {
    alert(`'${key} - зарплата ${obj[key]} долларов.'`); 
}

// 5
let n = 1000;
let num = 0;
while (n > 50) {
    n /=2;
    num++;
}    
    alert(n);  // вывел за пределы цикла, чтобы показывал только последний результат
    alert(num);

// 6
for ( let dayNumber = 5; dayNumber <= 31; dayNumber +=7) {
    alert(`"Сегодня пятница, ${dayNumber} число. Необходимо подготовить отчет."`);
}