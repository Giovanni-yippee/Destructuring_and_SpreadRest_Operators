// Destructuring-ыдырату

// Объектіні ыдырату:

// const student = { name: "Asan", age: 21 };
// const { name, age } = student;

// console.log(name);
// console.log(age);

// Массивті ыдырату:

// const numbers = [1, 2, 3];
// const [a, b, c] = numbers;

// console.log(a);
// console.log(b);

// Destructuring – объект немесе массив элементтерін жеке айнымалыларға бөліп алуға мүмкіндік береді.

// Spread (...) - кеңейту

// Объектілермен қолдану:

// const obj1 = { a: 1, b: 2 };
// const obj2 = { ...obj1, c: 3 };

// console.log(obj2);

// Массивтермен қолдану:

// const arr1 = [1, 2, 3];
// const arr2 = [...arr1, 4, 5];

// console.log(arr2);

// Spread операторы массивті немесе объектіні көшіруге немесе қосуға мүмкіндік береді.

// Rest (...) - жинақтау

// Объектілермен қолдану:

// const { a, ...rest } = { a: 1, b: 2, c: 3 };

// console.log(a);
// console.log(rest);

// Массивтермен қолдану:

// const [a, ...rest] = [1, 2, 3, 4];

// console.log(a);
// console.log(rest);

// Rest операторы бірнеше мәндерді бір массивке немесе объектіге жинауға мүмкіндік береді.

// let obj2 = {
//     weight: 65,
//     height: 186
// }

// let obj1 = {
//     name: "Asan",
//     age: 27,
//     city: "Almaty",
//     ...obj2
// }

// console.log(obj1)

// let arr = [4, 8, 21, 50]
// let [san, ...qalgan] = arr

// console.log(san);
// console.log(qalgan);

// let {name, ...qalgandary} = {
//     name: "Usen",
//     age: 26,
//     city: "shymkent"
// }

// console.log(name);
// console.log(qalgandary);

// let person = {
//     name: prompt("Atyndy jaz!"),
//     age: +prompt("Jasyndy jaz!"),
//     city: prompt("Oz qalandy jaz!")
// }

// let {name, age, city} = person;

// if(age<0){
//     alert("Sen poka planda joksyn!")
// }else if(age>=18 && age<100){
//     alert("Sen ereseksin!")
// }else if(age>=100){
//     console.log("Dinozavr")
// }else{
//     alert("Sadikke bar!")
// }

// Тапсырма: Объектіні ыдыратып, айнымалылар алыңыз

const book = { title: "Abai zholy", author: "Muhtar Auezov", year: 1942 };
const { title, author, year } = book;

console.log(title);
console.log(author);
console.log(year);

// Тапсырма: Массивтің бірінші элементін және қалған элементтерді бөлек айнымалыларға сақтаңыз

const fruits = ["alma", "almurt", "shie"];
const [ fruit, ...rest ] = fruits

console.log(fruit);
console.log(rest);

// Тапсырма: Массивтерді біріктіріңіз

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const array = [...arr1, ...arr2];

console.log(array);

// Тапсырма: Объектіні көшіріңіз және жаңа қасиет қосыңыз

const user = { name: "Ali", age: 25 };
const newUser = { ...user, qala: "Almaty" }

console.log(newUser);



let otvet = prompt("Bir zhauapty tandanyz: koru/qosu")

let persons = [
    { title: "Abai zholy", author: "Muhtar Auezov", year: 1942 },
    { title: "Abai zholy", author: "Muhtar Auezov", year: 1942 },
    { title: "Abai zholy", author: "Muhtar Auezov", year: 1942 }
]

let person = {
    name: prompt("Atyndy jaz!"),
    age: +prompt("Jasyndy jaz!"),
    city: prompt("Oz qalandy jaz!")
}

if(otvet="koru"){
    console.log(persons);
}else if(otvet="qosu"){
    alert(person);
    console.log(persons, person)
}else{
    alert("Qate zhauap.")
}