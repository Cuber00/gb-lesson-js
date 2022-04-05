// Задача 1

// let a = 1, b = 1, c, d;

//   /*
//   В переменую c присваивается значение a + 1 (префиксная форма инкремента)
//    */
//   c = ++a;
//   console.log(c);

//   /*
//   Инкремент расположен в постфиксной форме, в переменную d присваивается началоное значение b == 1
//    */
//   d = b++;
//   console.log(d);

//   /*
//   В переменную записывается результат выражения 2 + (a==2 + 1)
//    */
//   c = 2 + ++a;
//   console.log(c);

//   /*
//    Постфиксная форма b++ также увеличивает b, но возвращает старое значение (которое было до увеличения), т.е. d = 2 + b==2 (Выше уже выполнялся код b++)
//    */
//   d = 2 + b++;
//   console.log(d);

//   console.log(a);
//   console.log(b);


//   //Задача 2

// let a = 2;
// let x = 1 + (a *= 2);

//   /*
//     (a *= 2) === (a = a * 2), так же эта запись (a *= 2) перезаписывает значение a, а не просто проводит вычисления a * 2
//     x = 1 + (a==2 * 2) == 5 
//    */
// console.log(x);
// console.log(a);

//Задача 3

// const a = Number(prompt("Введите первое число"));
// const b = Number(prompt("Введите второе число"))

// if( Math.sign(a) >= 0 && Math.sign(b) >= 0)
//     console.log(`Оба числа положительные\nВычисляем разность чисел ${a} и ${b} = ${a - b}`);
// else if( Math.sign(a) === -1 && Math.sign(b) === -1 )
//     console.log(`Оба числа отрицательные\nВычисляем произведение чисел ${a} и ${b} = ${a * b}`);
// else
//     console.log(`Чила имеют разные знаки\nВычисляем сумму чисел ${a} и ${b} = ${a + b}`);

//Задача 4

// const firstNumber = Number(prompt("Введите первое число"));
// const secondNumber = Number(prompt("Введите второе число"));

// console.log(`Первое чилсло ${firstNumber} \nВторое число ${secondNumber}`);
// console.log(`Сумма чисел равна ${sum(firstNumber, secondNumber)}`);
// console.log(`Разность чисел равна ${difference(firstNumber, secondNumber)}`);
// console.log(`Произведение чисел равна ${multi(firstNumber, secondNumber)}`);
// console.log(`Деление чисел равна ${division(firstNumber, secondNumber)}`);

// function sum(a, b){
//     return a + b
// }
// function difference(a, b){
//     if(a > b)
//         return a - b
//     else if(a < b)
//         return b - a
//     else
//         return 0
// }  
// function multi(a, b){
//     return a * b
// }
// function division(a, b){
//     return a / b
// }

//Задача 5

const applesNumber = Number(prompt("Сколько у вас яблок?"));
const word = declinationOfNumber(applesNumber, "яблоко", "яблока", "яблок");
console.log(`У вас есть ${applesNumber} ${word}.`);

function declinationOfNumber (quantity, fistrWord, secondWord, thirdWord){
    if(quantity >= 5)
        return thirdWord
    else if(quantity === 1)
        return fistrWord
    else
        return secondWord
}
