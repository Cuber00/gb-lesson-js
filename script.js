//HomewWork Lesson-3

// Task #1

// for(let i=0; i < 11; i++){
//     if(i === 0){
//         console.log(`${i} - это ноль`);
//     } else if( i%2 === 0 ){
//         console.log(`${i} - это четное число`);
//     } else {
//         console.log(`${i} - это нечетное число`);
//     }
// }

// Task #2

// const arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(3, 2);   //В уроке когда шел разбор метода slice, вы имели ввиду методот splice, из-за этого вывод работал не так как хотели )
// console.log(arr);

// Task #3
// Создайте массив, состоящий из 5 произвольных значений, которые генерируются программой (диапазон значений от 0 до 10).

// Возведите каждый элемент этого массива в квадрат.

const arr = new Array();    
for (let i=0; i < 5; i++) {
    const random = () => Math.floor(Math.random()*10);
    arr.push(random());
}
console.log(arr);
const arrNew = arr.map(item => item ** 2);
console.log(arrNew);
