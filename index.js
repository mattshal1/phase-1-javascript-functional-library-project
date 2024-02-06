// Collection Functions (Arrays or Objects)
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i]);
        }
    } else if (typeof collection === 'object') {
        for (let key in collection) {
            callback(collection[key]);
        }
    }
    return collection;
}

function myMap(collection, callback) {
    const newArray = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            newArray.push(callback(collection[i]));
        }
    } else if (typeof collection === 'object') {
        for (let key in collection) {
            newArray.push(callback(collection[key], key));
        }
    }
    return newArray;
}

function myReduce(collection, callback, acc) {
    let startIdx = 0;
    if (acc === undefined) {
        if (Array.isArray(collection)) {
            acc = collection[0];
            startIdx = 1;
        } else if (typeof collection === 'object') {
            const keys = Object.keys(collection);
            acc = collection[keys[0]];
            startIdx = 1;
        }
    }
    if (Array.isArray(collection)) {
        for (let i = startIdx; i < collection.length; i++) {
            acc = callback(acc, collection[i], collection);
        }
    } else if (typeof collection === 'object') {
        const keys = Object.keys(collection);
        for (let i = startIdx; i < keys.length; i++) {
            const key = keys[i];
            acc = callback(acc, collection[key], collection);
        }
    }
    return acc;
}


function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                return collection[i];
            }
        }
    } else if (typeof collection === 'object') {
        const keys = Object.keys(collection);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            if (predicate(collection[key])) {
                return collection[key];
            }
        }
    }
}

function myFilter(collection, predicate) {
    const filteredArray = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                filteredArray.push(collection[i]);
            }
        }
    } else if (typeof collection === 'object') {
        const keys = Object.keys(collection);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            if (predicate(collection[key])) {
                filteredArray.push(collection[key]);
            }
        }
    }
    return filteredArray;
}

function mySize(collection) {
    if (Array.isArray(collection) || typeof collection === 'string') {
        return collection.length;
    } else if (typeof collection === 'object') {
        return Object.keys(collection).length;
    }
}

// Array Functions
function myFirst(array, n = 1) {
    if (n === 1) {
        return array[0];
    } else {
        return array.slice(0, n);
    }
}

function myLast(array, n = 1) {
    if (n === 1) {
        return array[array.length - 1];
    } else {
        return array.slice(Math.max(array.length - n, 0));
    }
}

// BONUS: mySortBy
function mySortBy(array, callback) {
    return array.sort((a, b) => {
        const valueA = callback(a);
        const valueB = callback(b);
        if (valueA < valueB) return -1;
        if (valueA > valueB) return 1;
        return 0;
    });
}

// BONUS: myFlatten
function myFlatten(array, shallow = false, newArr = []) {
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i]) && !shallow) {
            myFlatten(array[i], shallow, newArr);
        } else {
            newArr.push(array[i]);
        }
    }
    return newArr;
}

// Object Functions
function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}
