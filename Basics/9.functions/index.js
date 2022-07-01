let BabursMark; // ?

const BabursScore = 84;

let ShozizsMark; // ?

const ShozizsScore = 90;

if (BabursScore >= mark['5'].min) {
    console.log(5);
} else if (BabursScore >= mark['4'].min) {
    console.log(4);
}

if (BabursScore >= mark['4'].min) {
    console.log(4);
}

if (ShozizsScore >= mark['5'].min) {
    console.log(5);
} else if (ShozizsScore >= mark['4'].min) {
    console.log(4);
}

if (ShozizsScore >= mark['4'].min) {
    console.log(4);
}

// ---

// Syntax Sugar
// Repetetive Task

// function getMark(score) {
//     let mark = 0;

//     if (score >= 80) {
//         mark = 5;
//     } else if (score >= 70) {
//         mark = 4;
//     } else if (score >= 60) {
//         mark = 3;
//     } else {
//         mark = 2;
//     }

//     return mark;
// }

// getMark(90); // 5

// getMark(65); // 3

// getMark(55); // 2

// getMark(0); // 2

// getMark(-10); // 2

// ---
function babur(cb, lastName) {
    cb('Madiyor', lastName);
}

babur(
    function (firstName, lastName) {
        console.log(firstName + ' ' + lastName);
    },
    'Saburov',
    'Shaoziz'
); // Shaoziz + Saburov

// --
