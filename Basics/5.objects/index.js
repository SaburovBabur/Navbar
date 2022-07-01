// Primitive
// Non-Primitive

// String
const str = '';
const str1 = '';
const str2 = ``;

// Number
const num = 1;
const num2 = 0.5;

// Boolean
const bool = false;
const bool1 = true;

// Array
const arr = ['string', true, 24];

// Object
const gentra = ['kuzov', 'balon', 'mator', 'brand', 'model', 200]; // STACK

gentra[gentra.length - 1]; // Oxirgi element

gentra[9]; // undefined

gentra[2];
gentra[5];
gentra[gentra.length - 2];

const car = {
    // key: value
    model: `Gentra 1.5`,
    brand: `Chevrolet`,
    balon: 4,
    magnitola: false,
    speed: {
        max: 220,
        min: 0,
        in: `km`,
    },
    new: false,
    road: 10000,
    owner: undefined,
};

car.new = true;
car.road = 2000;

/**
 * Getting Properties
 */
car.model; // Gentra 1.5
car.brand; // Chevrolet

car.speed.max; // 220
car.speed.in; // km

car.speed.max + ' ' + car.speed.in + ' / h'; // 220 km / h
console.log(car.speed.max + ' ' + car.speed.in + ' / h');

car.road; // undefined

// 1. undefined
// 2. null
// 3. false
if (car.brand) {
    // ISHLIDI
}

if (car.new) {
    // SOTIB OLAMAN
}

car.brand;
'new' in car;
'nsadew' in car;

/**
 * Array OR Object
 */

// "Babur", "Mahdi", "Akmal", "Sanjar" // STACK
const myself = {
    firstName: 'Babur',
    lastName: `Allamberganov`,
    age: 25,
    teacher: true,
};

// 1
myself.name;

// 2
'name' in myself;

const uzb = {};

let programming = {
    languages: ['JavaScript', 'Python', 'Ruby'],
    difficulty: 8,
    jokes: 'http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke',
};
const key = 'new';

programming[key]; // programming.new
programming.key; // programming.key

// 1. [] . Difference
// 2. { func: () => {} }
// 3. Homework
