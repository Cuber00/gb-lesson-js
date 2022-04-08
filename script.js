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

// const arr = new Array();    
// for (let i=0; i < 5; i++) {
//     const random = () => Math.floor(Math.random()*10);
//     arr.push(random());
// }
// console.log(arr);
// const arrNew = arr.map(item => item ** 2);
// console.log(arrNew);

// Task #4
// 4
// Создайте массив, состоящий из 5 элементов. (Элементами массива должны быть произвольные цифры в диапазоне от 0 до 10.)
// Удалите значение 3, если будет такое значение.
// Каждое значение исходного элемента массива необходимо увеличить на 10%.
// Выведите в консоль два этих массива.


const arr = new Array();    
for (let i=0; i < 5; i++) {
    const random = () => Math.floor(Math.random()*10);
    arr.push(random());
}

const arrNew = arr.filter(item => item !== 3).map(item => +(item * 1.1).toFixed(2))
console.log(arr);
console.log(arrNew);
