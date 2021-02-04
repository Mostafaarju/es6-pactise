const person = {
    name: 'Jack William',
    age: '17',
    job: 'Facebook',
    gfName: 'Ema Watson',
    phone: '0173984984',
    salary: '450',
    address: 'kachu khet'
}
const {
    address,
    salary,
    phone,
    age
} = person;

console.log(phone, name, age, address);

const complexObject = {
    name: 'abc',
    info: {
        address: 'kola bagan',
        leader: 'Tiger leader'
    }
}

const {
    leader
} = complexObject.info;