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

// 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]

// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 2);   //В уроке когда шел разбор метода slice, вы имели ввиду методот splice, из-за этого вывод работал не так как хотели )
console.log(arr);
