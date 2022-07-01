const arr = ['Uzbekistan', 'Russia', 'Kazakhstan'];

/**
 * https://javascript.info/array-methds#find-and-findindex
 *
 * ===================================
 *                FIND
 * ===================================
 *
 * Returns the value of the first element in the array where value is true, and undefined otherwise.
 */
arr.find();

/**
 * ===================================
 *                FILTER
 * ===================================
 *
 * Returns the elements of an array that meet the condition specified in a callback function.
 */
arr.filter();

/**
 * ===================================
 *                MAP
 * ===================================
 *
 * Calls a defined callback function on each element of an array, and `returns` an array that contains the results.
 */
arr.map(
    (value, i) =>
        `<div>
        <h1>Title ${value}</h1>
        <p>Paragraph - ${value}</p>
    </div>
    `
);

/**
 * ===================================
 *                ForEACH
 * ===================================
 *
 * Performs the specified action for each element in an array.
 */
arr.forEach();

/**
 * ===================================
 *                REVERSE
 * ===================================
 *
 * Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
 */
arr.reverse();

/**
 * ===================================
 *             SPLIT / JOIN
 * ===================================
 *
 * 1) split - "STRING" TO ["S", "T", "R", "I", "N", "G"]
 *
 * 2) join - ["S", "T", "R", "I", "N", "G"] TO "STRING"
 */
'STzrin'.split('') / arr.join('');

/**
 * ===================================
 *                REDUCE
 * ===================================
 *
 * Calls the specified callback function for all the elements in an array.
 * The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
 */
arr.reduce();

/**
 * ===================================
 *                SORT
 * ===================================
 *
 * Sorts an array in place. This method mutates the array and returns a reference to the same array.
 */
arr.sort();
