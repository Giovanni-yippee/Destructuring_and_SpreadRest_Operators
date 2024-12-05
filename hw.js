// Тапсырма 1: Оқушы бағаларын бөліп алу(ыдырату)

let students = [
    {
        name: "Asan",
        age: 15,
        grades: {
            math: 85,
            english: 90,
            science: 80,
        },
        address: {
            city: "Almaty",
            street: "Abaya",
        },
    },
    {
        name: "Aizhan",
        age: 16,
        grades: {
            math: 95,
            english: 85,
            science: 88,
        },
        address: {
            city: "Astana",
            street: "Tauelsizdik",
        },
    },
];

let { name, grades: { math }, address: { city }, country = "Қазақстан" } = students[0];


console.log(`Aty: ${name}`);
console.log(`Matematika bagasy: ${math}`);
console.log(`Qala: ${city}`);
console.log(`El: ${country}`);

// Тапсырма 2: Сынып тізімдерін қосу (Spread операторын пайдалану)

let classA = ["Амина", "Әділ", "Әлина"];
let classB = ["Берік", "Бақыт", "Баян"];
let songyTizim = ["Директор", ...classA, ...classB, "Мұғалім"];

console.log(songyTizim);