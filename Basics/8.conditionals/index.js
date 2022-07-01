// Bozorga bor:
// Olma < 15,000 sum => Sotib ol

// ===================================
//              IF
// ===================================

const condition = true;

if (condition) {
    // RUNS
}

if (false) {
    // DOES NOT RUN
}

let num = 3;
if (num > 0) {
    console.log(`${num} is a positive number`);
}

num = -1;
if (num > 0) {
    // DOES NOT RUN
}

const isRaining = true;
if (isRaining) {
    console.log('Zontik olib chiqing!');
}

// Bozorga bor:
// Agar:     Olma < 15,000 sum => Sotib ol
// Bolmasa:  Uzum sotib ol
// ===================================
//              IF - ELSE
// ===================================

let condition1 = true;

if (condition1) {
    // RUNS
} else {
    // DOES NOT RUN
}

condition1 = false;
if (condition1) {
    // DOES NOT RUN
} else {
    // RUNS
}

// ---
let num2 = 3;
if (num2 > 0) {
    console.log(`${num2} is a +positive number`);
} else {
    console.log(`${num2} is a -negative number`);
}

// ---
num = -3;
if (num > 0) {
    console.log(`${num} is a positive number`);
} else {
    console.log(`${num} is a negative number`);
}

// Bozorga bor:
// Agar:          Olma < 15,000 sum => Sotib ol
// Bolmasa Agar:  Uzum < 12,000 sum => Sotib ol
// Bolmasa Agar:  Shaftoli < 17,000 sum => Sotib ol
// Bolmasa Agar:  Tarvuz < 15,000 sum => Sotib ol
// Bolmasa:       Xoxlagan yoqqan mevani ol!

let a = 0;
if (a > 0) {
    console.log(`${a} is a positive number`);
} else if (a < 0) {
    console.log(`${a} is a negative number`);
} else if (a == 0) {
    console.log(`${a} is zero`);
} else {
    console.log(`${a} is not a number`);
}

// ===================================
//                 !
// ===================================

//      !false => true
//      !true  => false

if (!true) {
    // DOES NOT RUN
}

if (!false) {
    // RUNS
}
