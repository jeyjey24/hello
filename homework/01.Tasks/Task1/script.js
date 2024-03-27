//task1
//1
//let g = 12
//let f = 8
//console.log(g*f); //96
//2
//let x = 10/2
//x += x
//console.log(x); //10
//3
//let num1 = 20
//let num2 = 17
//console.log(num1+num2); //37
//4
//let name = 'Jeyran '
//let surname = 'Zahidli '
//let year = 2005
//let info = name + surname + year
//console.log(info); //Jeyran Zahidli 2005
//5
//console.log(17 % 12); //5
//6
//let cityName = 'Baku'
//cityName = 'Gence'
//console.log(cityName); //Gence
//7

//task2
//let a = 1, b = 1
//let c = ++a
//let d = b++
//console.log(c); //2
//console.log(d); //1
//console.log(b); //2

//task3
//let a1 = 2;
//let x1 = 1 + (a *= 2)
//console.log(x1); //5

//task4
//console.log('test1', test); //test is not defined
{
    //let test = 'something'
    //console.log('test2', test); //test2, something
}

//console.log('test3', test); //test is not defined

//console.log('test1', test);  //test is not defined
//{
//     var test = "something"
//     console.log('test2', test); //test2, something
//}
//console.log('test3', test); //test is not defined

//task5
//let name1 = "Ulfat" //string
//console.log(name1);
//let surname1 = Zakirli // a syntax error
//console.log(surname1);
//let year1 = 2000 //number
//console.log(year1);
//year1 = "2000" //changes from number to string. 
//console.log(year1); 
//let city; //undefined
//console.log(city);
//let qualification = null //null
//console.log(qualification);
//let obj = { name: 'ulfat' } //{name: 'ulfat'}
//console.log(obj);
//let arr = ['a', 'b', 'c'] //(3) ['a', 'b', 'c']
//console.log(arr);

//task6
//let user = {
//    name: "Jeyran",
//    surname: "Zahidli",
//    age: 18,
//    city: "Baku"
//};
//1 
//user.name = 'John'
//2
//console.log(user); //{name: 'John', surname: 'Zahidli', age: 18, city: 'Baku'}

const obj = {
    email: 'ulfat@gmail.com',
    info: {
        gender: 'Male',
        loc: {
            city: "Baku",
            street: 'Nizami 22',
            education: {
                "uni name": "ADNSU",
            }
        }
    }
}
//3
 console.log(obj.info.gender); //Male
//4
 console.log(obj.info.loc.city); //Baku
//5
 delete obj.info.loc.street
//6
delete obj.email
obj.info.email = 'ulfat@gmail.com'
//7 
obj.info.loc.education["uni name"] = 'BDU'
//8 
obj.info.loc.education.degree = 'bachelor'
//9 
obj.info.loc.street = 'Nizami 23'
//10
const numberOfProperties = Object.keys(obj).length;
console.log(numberOfProperties); //1 (because email was deleted)




