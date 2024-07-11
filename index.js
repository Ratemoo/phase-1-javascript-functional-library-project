// Implementation of custom utility functions

// Function to iterate over elements of an array or object
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      for (let key in collection) {
        callback(collection[key]);
      }
    }
    return collection; // Return the modified collection
  }
  
 // myMap function
function myMap(collection, callback) {
    const result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i], i, collection));
      }
    } else if (typeof collection === 'object') {
      for (const key in collection) {
        if (Object.hasOwnProperty.call(collection, key)) {
          result.push(callback(collection[key], key, collection));
        }
      }
    }
    return result;
  }
  
  
  
  
  
  
  
 // Function to reduce array or object to a single value
function myReduce(collection, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : collection[0];
    let startIndex = initialValue !== undefined ? 0 : 1;
  
    if (Array.isArray(collection)) {
      for (let i = startIndex; i < collection.length; i++) {
        accumulator = callback(accumulator, collection[i], collection);
      }
    } else {
      const keys = Object.keys(collection);
      accumulator = initialValue !== undefined ? initialValue : collection[keys[0]];
      startIndex = initialValue !== undefined ? 0 : 1;
      for (let i = startIndex; i < keys.length; i++) {
        accumulator = callback(accumulator, collection[keys[i]], collection);
      }
    }
  
    return accumulator;
  }
  
  
  
  
  
  
  // Function to find a value in array or object
function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
    } else {
      let keys = Object.keys(collection);
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        if (predicate(collection[key])) {
          return collection[key];
        }
      }
    }
  }
  
  
  // Function to filter array or object
function myFilter(collection, predicate) {
    if (Array.isArray(collection)) {
      return collection.filter(predicate);
    } else {
      const filtered = {};
      Object.keys(collection).forEach(key => {
        if (predicate(collection[key])) {
          filtered[key] = collection[key];
        }
      });
      return Object.keys(filtered).length > 0 ? filtered : [];
    }
  }
  
  
  // Function to get the size of an array or the number of keys in an object
  function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
  }
  
  // Function to get the first element(s) of array or object
function myFirst(collection, n = 1) {
    if (Array.isArray(collection)) {
      return n === 1 ? collection[0] : collection.slice(0, n);
    } else {
      const keys = Object.keys(collection);
      const result = {};
      for (let i = 0; i < Math.min(n, keys.length); i++) {
        result[keys[i]] = collection[keys[i]];
      }
      return n === 1 ? result[keys[0]] : result;
    }
  }
  
  
 // Function to get the last element(s) of array or object
function myLast(collection, n = 1) {
    if (Array.isArray(collection)) {
      return n === 1 ? collection[collection.length - 1] : collection.slice(-n);
    } else {
      const keys = Object.keys(collection);
      const result = {};
      for (let i = Math.max(keys.length - n, 0); i < keys.length; i++) {
        result[keys[i]] = collection[keys[i]];
      }
      return n === 1 ? result[keys[keys.length - 1]] : result;
    }
  }
  
  
  // Function to get all keys of an object
  function myKeys(obj) {
    return Object.keys(obj);
  }
  
  // Function to get all values of an object
  function myValues(obj) {
    return Object.values(obj);
  }
  
  // Example usage:
  const testArr = [1, 2, 3, 4];
  const testObj = { one: 1, two: 2, three: 3, four: 4 };
  
  console.log(myMap(testArr, x => x * 2)); // Output: [2, 4, 6, 8]
  console.log(myReduce(testArr, (acc, val) => acc + val, 0)); // Output: 10
  console.log(myFilter(testArr, x => x > 2)); // Output: [3, 4]
  console.log(mySize(testObj)); // Output: 4
  console.log(myFirst(testArr, 2)); // Output: [1, 2]
  console.log(myLast(testObj, 2)); // Output: [3, 4]
  console.log(myKeys(testObj)); // Output: ['one', 'two', 'three', 'four']
  console.log(myValues(testObj)); // Output: [1, 2, 3, 4]
  