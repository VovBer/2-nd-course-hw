// 1
let a = 10;
a = 20;
alert(a);
// 2
const year = "год выпуска первого iPhone - 2007";
alert(year);
// 3
const creator = "создатель языка программирования JavaScript - Brendan Eich";
alert(creator);
// 4
let c = 10;
let d = 2;
alert(c+d);
alert(c-d);
alert(c*d);
alert(c/d);
// 5
let result = (2**5);
alert(result);
// 6
let e = 9;
let f = 2;
alert(e%f);
// 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
++num;
--num;
alert(num);
// 8
let age = Number(prompt('Сколько Вам лет?'));
alert(age);
// 9
const user = {
    name: 'Vladimir',
    age: 41,               // 9.0
    isAdmin: false,
}
user['city of residence'] = 'Perm'; // 9.1
user.age = 40;   // 9.2
delete user['city of residence']; // 9.3 
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);  // 9.4
// 10
let userName = prompt("Как Ваше имя?");
alert(`Привет, ${userName}`);
