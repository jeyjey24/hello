
//2
let firstName = 'Jeyran '
let lastName = 'Zahidova '
const year = 2005
let uni = 'BDU'
let age = 18 
let a = 1
let b = 4
//3
if (firstName === lastName || year + age !== 2024) {
    console.log('THIS IS AN ERROR YOU ARE ROBOT'); 
} else {
    console.log('QEBUL EDILDINIZ');
}
//4
console.log(age+a+b);
console.log('18'+'1'+'4');
console.log(age+a+'4');
//5
let x = 23
let y = 1814
let z = 194
if (x>y && x>z) {
    console.log(x);  
}
else if (y>z) {
    console.log(y);    
}
else {
    console.log(c);
}


if (x<y && x<z) {
    console.log(x);    
}
else if (y<z) {
    console.log(y);
}
else {
    console.log(z);
}


//6
let firstName1 = 'JEYRAN'
console.log(firstName1.toLowerCase());
//7
let firstName2 = 'jeyran'
console.log(firstName2.toUpperCase());
//8
let fullName = 'Jeyran Zahidova'
console.log(fullName.length);
//9

//10
let fullLowerName = 'jeyran zahidova'
let jwithBig = fullLowerName.slice(0, 1).toUpperCase()+fullLowerName.slice(1)
let zwithBig = jwithBig.slice(0, 7) + jwithBig.slice(7, 8).toUpperCase()+fullLowerName.slice(8)
console.log(zwithBig);



