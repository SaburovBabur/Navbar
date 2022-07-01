// ===================================
//              OBJECTS
// ===================================

const capitalsObj = {
    // key: value
    Uzbekistan: 'Tashkent',
    Russia: 'Moskva',
    Kazakhstan: 'Nursultan',
};

// EXAMPLE:
for (const key in capitalsObj) {
    console.log(`${key}: ${capitalsObj[key]}`);
}

// ===================================
//              ARRAYS
// ===================================

const countriesArr = ['Uzbekistan', 'Russia', 'Kazakhstan'];

// EXAMPLE:
for (const value of countriesArr) {
    console.log(value);
}

// EXAMPLE:
for (const key in countriesArr) {
    console.log(key);
}

// ===================================
//              STRINGS
// ===================================

const countryString = 'Uzbekistan';

// EXAMPLE:
for (const key in countryString) {
    console.log(key, 'sadsad');
}

for (const value of countryString) {
    console.log(value, '===');
}
