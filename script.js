//  Task #1
const number = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
};
const task_1 = (obj) => {
    console.log("Task #1");
    for(const key in obj){
        if(obj[key] >= 3){
            console.log(obj[key]);
        }
    }
}
task_1(number);


//  Task #2
const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
      {
        userId: 10,
        userName: "Alex",
        text: "lorem ipsum",
        rating: {
          likes: 10,
          dislikes: 2, // вывести это число
        },
      },
      {
        userId: 5, // вывести это число
        userName: "Jane",
        text: "lorem ipsum 2", // вывести этот текст
        rating: {
          likes: 3,
          dislikes: 1,
        },
      },
    ],
  };
const task_2 = (obj) => {
    console.log("Task #2");

    console.log(obj.author);
    console.log(obj.comments[0].rating.dislikes);
    console.log(obj.comments[1].userName);
    console.log(obj.comments[1].text);
}
task_2(post);


//  Task #3
const products_3 = [
    {
      id: 3,
      price: 200,
    },
    {
      id: 4,
      price: 900,
    },
    {
      id: 1,
      price: 1000,
    },
  ];
const task_3 = (arr) => {
    console.log("Task #3");
    arr.forEach(item => {
        item.price *= 0.85;
    })
    console.log(arr);
}
task_3(products_3);


//  Task #4
const products = [
    {
      id: 3,
      price: 127,
      photos: [
        "1.jpg",
        "2.jpg",
      ],
    },
    {
      id: 5,
      price: 499,
      photos: [],
    },
    {
      id: 10,
      price: 26,
      photos: [
        "3.jpg",
      ],
    },
    {
      id: 8,
      price: 78,
    },
];

const task_4 = (arr) => {
    console.log("Task #4");
    const resultFilter = arr.filter(item => "photos" in item && item.photos.length > 0);
    console.log(resultFilter);

    arr.sort((a, b) => a.price - b.price); 
    console.log(arr);
}
task_4(products);


//  Task #5 
const task_5 = (keyArr, valueArr) => {
    console.log("Task #5");
    const obj = new Object;
    for (const key in keyArr) {
        if(keyArr[key] in obj === false){
            obj[keyArr[key]] = valueArr[key];
        } 
    }
    console.log(obj);
}

const en = ["mon",  "tue",  "wed",  "thu",  "fri",  "sat",  "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

task_5(en, ru)


//  Task #6
const task_6 = (obj) => {
    console.log("Task #6");
    let result = 0;
    Object.values(obj).forEach(item => {
        Object.values(item).map(value => result += +value);
    })
    console.log(result);
}

const numbers = {
    key1: {
        keyin1: 1,
        keyin2: 2,
        keyin3: 3,
    },
    key2: {
        keyin1: 4,
        keyin2: 5,
        keyin3: 6,
    },
};

task_6(numbers);