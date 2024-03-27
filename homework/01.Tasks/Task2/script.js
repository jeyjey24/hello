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
console.log(startingWithT(arr2));
function startingWithT(arr) {
    let res= []
    arr.map(item => {
        if (item.name[0] === 't') {
            res.push(item)
        }
    })
    return res;
}

//17
console.log(startingAndEndingWithT(arr2));
function startingAndEndingWithT(arr) {
    let res= []
    arr.map(item => {
        if (item.name[0] === 't' && item.name[item.name.length - 1] === 't') {
            res.push(item)
        }
    })
    return res;
}

//18
console.log(keysDigit(arr2));
function keysDigit(arr) {
    let res = 0; 
    arr.map(item => {
        if (item.name[0] === 't' && item.name[item.name.length - 1] === 't') {
            res += item.key;
        }
    })
    return res;
}

//19
console.log(changeNameToSuperDev(arr2));
function changeNameToSuperDev(arr) {
    arr.map(item => {
        if (item.name[item.name.length - 1] === 'e') {
            item.name = "SuperDev"
        }
    })
}

//20
console.log(maxLengthNameKey(arr2));
function maxLengthNameKey(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max.name.length < arr[i].name.length) {
            max = arr[i];
        }
    }
    return max.key;
}

//21
console.log(maxLengthNameIndex(arr2));
function maxLengthNameIndex(arr) {
    let max = arr[0];
    let maxIndex= 0;
    arr.forEach((element, index) => {
        if (max.name.length < element.name.length) {
            max = element;
            maxIndex = index;
        }
        
    });
    return maxIndex;
}

//22
console.log(new4LengthItemsArr(arr2));
function new4LengthItemsArr(arr) {
    let newArr = [];
    arr.map(item => {
        if (item.name.length === 4) {
            newArr.push(item)
        }
    });
    return newArr;
}

//23 
console.log(maxKeyObjName(arr2));
function maxKeyObjName(arr) {
    let max = arr[0]
    arr.map(item => {
        if (item.key > max.key) {
            max = item;
        }
    })
    return max.name
} 

//24 
console.log(find2LsNameİndexs(arr2));
function find2LsNameİndexs(arr) {
    let res = []
    arr.map(item => {
        if (item.name.split('').filter(s => s.toLowerCase() === "l").length === 2) {
            res.push(item.key)
        }
    })
    return res;
}

//25 
console.log(find2LsNameİndexs(arr2));
function find2LsNameİndexs(arr) {
    let res = []
    arr.map(item => {
        if (item.name.split('').filter(s => s.toLowerCase() === "l").length === 2) {
            res.push(item.key)
        }
    })
    return res;
}






