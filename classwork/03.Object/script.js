const user = {
    firstname: 'Jeyran',
    lastname: 'Zahidova',
    age:  18,
    address: {
        city: 'Baku',
        country: 'Az',
        street: 'Nizami',
        some: {
            l: '55',
            b: '343'
        }
    },
    uni: 'BDU',
    isAdmin: false, 
    salary: null,
    position: undefined
}

user.watch = 'like 9pm'
user.address.some.watch = 'like 9pm'

console.log(user.age);

console.log(user.address.street);

console.log(user.address.some.l);

user.position = 'Cyber'

user.uni = 'code'

delete user.salary

