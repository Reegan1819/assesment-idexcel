import React from "react";

const Assesments = () => {
  //. Merge 2 sorted arrays, resulting array should be sorted as well
  // Example
  let arr1 = [1, 3, 5, 7, 9];
  let arr2 = [2, 4, 6, 8, 10];

  //output

  let output = [...arr1, ...arr2].sort((a, b) => a - b);
  console.log(output);

  //Write a function that finds the intersection of two sorted arrays.
  // example [1,4,7,10] and [1,3,5,7,9,11] -> intersection is [1,7]

  let arr3 = [1, 4, 7, 10];
  let arr4 = [1, 3, 5, 7, 9, 11];

  let intersection = arr3.filter((value) => arr4.includes(value));
  console.log(intersection);

  //Given 2 strings, find if one string is an anagram of another
  // Example: "Madam Curie" = "Radium came"

  let str1 = "Madam Curie";

  let str2 = "Radium came";

  let isAnagram = (str1, str2) => {
    let str1Arr = str1
      .toLowerCase()
      .split("")
      .filter((char) => char !== " ");
    let str2Arr = str2
      .toLowerCase()
      .split("")
      .filter((char) => char !== " ");

    if (str1Arr.length !== str2Arr.length) {
      return false;
    }

    let str1Obj = {};

    for (let i = 0; i < str1Arr.length; i++) {
      if (str1Obj[str1Arr[i]]) {
        str1Obj[str1Arr[i]]++;
      } else {
        str1Obj[str1Arr[i]] = 1;
      }
    }

    for (let i = 0; i < str2Arr.length; i++) {
      if (str1Obj[str2Arr[i]]) {
        str1Obj[str2Arr[i]]--;
      } else {
        return false;
      }
    }

    return true;
  };

  console.log(isAnagram(str1, str2));

  // 4. Implement a curry function for sum, example sum(1)(2)(3)() => return 6
  // Interviewers to ensure that a candidate follows the following template:
  // function sum(){
  //      return function(){
  //      }
  // }

  const sum = (a) => {
    return function (b) {
      if (b) {
        return sum(a + b);
      } else {
        return a;
      }
    };
  };

  console.log(sum(1)(2)(3)());

  // 5. Write a polyfill for promise.all, promise.series

  function promiseAll(promises) {
    return new Promise((resolve, reject) => {
      let resolvedValues = [];
      let resolvedCount = 0;

      promises.forEach((promise, index) => {
        Promise.resolve(promise)
          .then((value) => {
            resolvedValues[index] = value;
            resolvedCount++;

            if (resolvedCount === promises.length) {
              resolve(resolvedValues);
            }
          })
          .catch(reject);
      });

      if (promises.length === 0) {
        resolve([]);
      }
    });
  }

  const promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];

  promiseAll(promises).then((results) => {
    console.log(results);
  });

  function promiseSeries(tasks) {
    let result = Promise.resolve();
    const results = [];

    tasks.forEach((task) => {
      result = result
        .then(() => task())
        .then((res) => {
          results.push(res);
        });
    });

    return result.then(() => results);
  }

  // Example usage:
  const tasks = [
    () => Promise.resolve(1),
    () => Promise.resolve(2),
    () => Promise.resolve(3),
  ];

  promiseSeries(tasks).then((results) => {
    console.log(results);
  });

  //Implement debounce/throttle.

  function debounce(func, wait) {
    let timeout;

    return function (...args) {
      const context = this;

      clearTimeout(timeout); 
      timeout = setTimeout(() => {
        func.apply(context, args); 
      }, wait);
    };
  }

  const logMessage = debounce(() => {
    console.log("Debounced function executed!");
  }, 1000);

  logMessage();
  logMessage();
  logMessage();

  //throttle
  function throttle(func, limit) {
    let inThrottle;
  
    return function(...args) {
      const context = this;
  
      if (!inThrottle) {
        func.apply(context, args); 
        inThrottle = true;
  
        setTimeout(() => {
          inThrottle = false; 
        }, limit);
      }
    };
  }
  
  // Example usage:
  const logThrottle = throttle(() => {
    console.log('Throttled function executed!');
  }, 1000);
  
  
  setInterval(logThrottle, 200); // Will only execute every 1000ms even though called every 200ms
  


  return <div>Assesments</div>;
};

export default Assesments;
