//task1
//1
let fullName = 'Ulfat Zakirli Rovshen'
//let fullNameArray = fullName.split("")
//console.log(fullNameArray);

//2
let fullNameArray = fullName.split(" ")
let smt = [fullNameArray[1], fullNameArray[0], fullNameArray[2]]
console.log(smt);

//3
let changes = smt.join(" ")
console.log(changes);

//4
//let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];

//let countOf5 = arr.filter(num => num === 5).length

//console.log(countOf5);

//5
//let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];
//let sum = 0
//arr.map(item => sum += item)
//console.log(sum);

//6
let increase = arr.filter((item, index) => arr.indexOf(item) === index);
console.log(increase);

//7
let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];
console.log(Math.max(4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7));
let arr3 = arr.filter(item => item == 7)
console.log(arr2);

//8
const Name = 'jeyran'
let nm1 = Name.length
console.log(nm1);

//9
//let result = arr.filter(item => item %3 ==2)
//console.log(result);
////let result = arr.findIndex(item => item == "2")
//console.log(result)
//let result = arr.findIndex(item => item =="5")
//console.log(result);


//10 
//let result = arr.findIndex(item => item == "7")
//console.log(result);

//11
//let result = arr.findIndex (item => item == "4")
//console.log(result);

//12



//13
let array2 = arr.filter(item => item > 2);
let arr4 = arr.length - array2.length;
console.log(array2);
console.log(arr4);

//14
let index7 = arr.indexOf (7)
console.log(index7);


//task2
let arr2 = [
    {
        name: 'test',
        key: 1
    },
    {
        name: 'task',
        key: 2
    },
    {
        name: 'tanqo',
        key: 3
    },
    {
        name: 'like',
        key: 4
    },
    {
        name: 'task',
        key: 5
    },
    {
        name: 'trust',
        key: 6
    },
    {
        name: 'test',
        key: 7
    },
    {
        name: 'last',
        key: 8
    },
    {
        name: 'tanqo',
        key: 9
    },
    {
        name: 'elephant',
        key: 10
    },
    {
        name: 'love',
        key: 11
    },
    {
        name: 'small',
        key: 12
    },
    {
        name: 'little',
        key: 13  
    },
]

//16
let names = arr2.filter(item => item.name.startsWith('t'));
console.log(names);

//17
let nameT = arr2.filter(item => item.name.startsWith('t') && item.name.endsWith('t')).length;
console.log(nameT);

//19
let arr1 = arr2.map((item, index) => {
    if (item.name.slice(-1) === 'e') {
        return { ...item, name: "SuperDev" };
    } else {
        return item;
    }
});
console.log(arr)




