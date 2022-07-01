const user = ['Saburov', 'Babur', 25];

array.shift();
array.unshift();
array.pop();
array.push();

console.log(user); // ['Saburov', 'Babur', 25];
console.log(user.shift()); // 'Saburov'
console.log(user); // ['Babur', 25]

console.log(user);
console.log(user.unshift('IT Developer'));
console.log(user);

console.log(user);
console.log(user.pop());
console.log(user);

console.log(user);
console.log(user.push('IT Developer'));
console.log(user);

// 1) ==================

arrayDelete(2, ['Banana', 'Orange', 'Apple', 'Mango']); // ['Apple', 'Mango']

function arrayDelete(count, arr) {
    for (let i = 0; i < count; i++) {
        arr.shift();
    }

    return arr;
}
