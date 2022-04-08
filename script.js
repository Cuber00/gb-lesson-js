//HomewWork Lesson-3


// Task #1
const task_1 = () => {
    console.log("Task #1");
    for(let i=0; i < 11; i++){
        if(i === 0){
            console.log(`${i} - это ноль`);
        } else if( i%2 === 0 ){
            console.log(`${i} - это четное число`);
        } else {
            console.log(`${i} - это нечетное число`);
        }
    }
}
task_1();


// Task #2
const task_2 = () => {
    console.log("Task #2");
    const arr = [1, 2, 3, 4, 5, 6, 7];
    arr.splice(3, 2);   //В уроке когда шел разбор метода slice, вы имели ввиду методот splice, из-за этого вывод работал не так как хотели )
    console.log(arr);
}
task_2();


// Task #3
const task_3 = () => {
    console.log("Task #3");
    const arr = new Array();    
    for (let i=0; i < 5; i++) {
        const random = () => Math.floor(Math.random()*10);
        arr.push(random());
    }
    console.log(arr);
    const arrNew = arr.map(item => item ** 2);
    console.log(arrNew);
}
task_3();


// Task #4
const task_4 = () => {
    console.log("Task #4")
    const arr = new Array();    
    for (let i=0; i < 5; i++) {
        const random = () => Math.floor(Math.random()*10);
        arr.push(random());
    }
    const arrNew = arr.filter(item => item !== 3).map(item => +(item * 1.1).toFixed(2))
    console.log(arr);
    console.log(arrNew);
}
task_4();


//Task #5
const task_5 = () => {
    console.log("Task #5");
    for(let i=0; i < 10; console.log(i), i++){}
}
task_5();


//Task 6
const task_6 = () => {
    console.log("Task #6");
    let symbol = 'x';
    let str = "";
    for (let i=1; i < 21; i++){
        str += symbol.repeat(i) + "\n";
    }
    console.log(str)
}
task_6();