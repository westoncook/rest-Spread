// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

const filterOutOdds = (...rest) => {
    return rest.filter(num => num % 2 === 0);
}

// Make findMin()
const findMin = (...rest) => {
    return rest.reduce((min, next) => min < next ? min : next);
}
findMin(1, 4, 12, -3) // -3
findMin(1, -1) // -1
findMin(3, 1) // 1

const mergeObjects = (obj1, obj2) => {
    return { ...obj1, ...obj2 }
}

mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }) // {a:1, b:2, c:3, d:4}

const doubleAndReturnArgs = (arr, ...rest) => {
    const argsDoubled = rest.map(num => num * 2);
    return [...arr, ...argsDoubled];
}

doubleAndReturnArgs([1, 2, 3], 4, 4) // [1,2,3,8,8]
doubleAndReturnArgs([2], 10, 4) // [2, 20, 8]

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
    const newItems = [...items];
    const removeIndex = Math.floor(Math.random() * items.length);
    items.splice(removeIndex, 1);
    return items
}

/** Return a new array with every item in array1 and array2. */

const extend = (arr1, arr2) => [...arr1, ...arr2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */
const addKeyVal = (obj, key, val) => {
    const newObj = { ...obj };
    newObj[key] = val;
    return newObj;
}

/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    const newObj = { ...obj };
    delete newObj[key];
    return newObj;
}

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });



/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    const newObj = { ...obj };
    newObj[key] = val;
    return newObj;
}
