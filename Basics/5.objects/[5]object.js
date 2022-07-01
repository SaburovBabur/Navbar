const gentra = {
    // key: value
    name: `Gentra 1.5`,
    brand: `Chevrolet`,
    speed: {
        max: 200,
        min: 0,
        in: 'km',
    },
    new: false,
    road: 10000,
    start: () => {
        console.log('Started');
    },
    light: () => {
        console.log('Lightened');
    },
    owner: undefined,
};

// gentra.name; // Gentra 1.5

// /**
//  * ==============================
//  * Check Propert exists?
//  */

// if (gentra && gentra.speed && gentra.speed && gentra.in) {
//     gentra.speed.max + gentra.speed.in + '/h'; // 200 km/h
// }

// if (gentra.new) {
//     // NOT WORKING (BAD)
// }

// if ('new' in gentra) {
//     // WORKING
// }

gentra.new; // false
gentra.owner; // undefined

'new' in gentra; // true
'owner' in gentra; // true

// gentra.light(); // Light is on

/**
 * ==============================
 * Modify properties
 * ==============================
 */

gentra.new = true;

delete gentra.road;

console.log(gentra);
