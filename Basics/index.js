// const users = [
//     { name: 'Shoaziz', year: 2003 },
//     { name: 'Madiyor', year: 2003 },
//     { name: 'Shahlo', year: 2003 },
//     { name: 'AbduXalil', year: 2008 },
// ];

// const usersFiltered = users.filter(function (value, idx, arrClone) {
//     if (value.age <= 2003) {
//         return true;
//     }

//     return false;
// });

// ===================

// const user2002 = users.filter(function (value, idx, arrClone) {
//     if (value.age === 2002) {
//         return true;
//     }

//     return false;
// });

// const user2002 = users.filter(function (value, idx, arrClone) {
//     if (value.age === 2003) {
//         return true;
//     }

//     return false;
// });

// =============
// Arr clone
// const arrClone = [...arr];

// const usersMap = users.map(function (user, idx) {
//     if (user.year <= 2003) {
//         user.canDrive = true;
//     } else {
//         user.canDrive = false;
//     }

//     return user;
// });

// const usersMap = users.forEach(function (user, idx) {
//     if (user.year <= 2003) {
//         user.canDrive = true;
//     } else {
//         user.canDrive = false;
//     }
// });

// console.log(usersMap);
// console.log(users);

// const nums = [0, 1, 2, 3];

// function reverse(arrNums) {
//     let reversedArr = [];
//     const arrClone = [...arrNums];

//     for (let i = 0; i < arrNums.length; i++) {
//         reversedArr.push(arrClone.pop());
//     }

//     return reversedArr;
// }
// console.log(reverse(nums));
// console.log(nums);

// "Madyar" -> "raydaM"

// function strReverse(str) {
//     return str.split('').reverse().join('');
// }

// ==========================
//          SIMPLE
// ==========================

// const users = [
//     {
//         name: 'Babur',
//         age: 25,
//         salar: {
//             amount: 1000,
//             type: `$`,
//         },
//     },
//     {
//         name: 'Shoaziz',
//         age: 18,
//         salary: {
//             amount: 200,
//             tax: 15,
//             type: `$`,
//         },
//     },
// ];

// const user = users.find(function (user) {
//     return user.name === `Shoaziz`;
// });

// const getProfit = (profit, tax) => {
//     return profit - tax;
// };

// console.log(getProfit(user.salary.amount, user.salary.tax));
