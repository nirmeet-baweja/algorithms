const { performance } = require("perf_hooks");

/**
 * @brief Function to check if a string is palindrome using inbuilt
 * JS string functions
 * @param {String} str
 * @returns {boolean}
 */
const palindrome = (str) => {
  const revStr = str.split("").reverse().join("");
  return revStr === str;
};

/**
 * @brief Function to check if a string is palindrome using for loop
 * @param {String} str
 * @returns {boolean}
 */
const palindromeIterative = (str) => {
  for (i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] != str[j]) {
      return false;
    }
  }
  return true;
};

/**
 * @brief Function to measure the performance of a given function
 * @param {Function} funct
 * @param {Object} arg
 * @returns {Float} average run time of the given function
 */
const measureAvgRunTime = (funct, arg) => {
  let totalTime = 0;
  // run the function a 1000 time to calculate avg run time
  for (let i = 0; i < 1000; i++) {
    let startMs = performance.now();
    funct(arg);
    let endMs = performance.now();
    let time = endMs - startMs;
    totalTime += time;
  }
  return totalTime;
};

// a long string
const str =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

// a long palindrome string
const palStr =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.murobal tse di mina tillom tnuresed aiciffo iuq apluc ni tnus ,tnediorp non tatadipuc taceacco tnis ruetpecxE .rutairap allun taiguf ue erolod mullic esse tilev etatpulov ni tiredneherper ni rolod eruri etua siuD .tauqesnoc odommoc ae xe piuqila tu isin sirobal ocmallu noitaticrexe durtson siuq ,mainev minim da mine tU .auqila angam erolod te erobal tu tnudidicni ropmet domsuie od des ,tile gnicsipida rutetcesnoc ,tema tis rolod muspi meroL";

const t1 = measureAvgRunTime(palindrome, palStr);
const t2 = measureAvgRunTime(palindromeIterative, palStr);

console.log("Case 1 : Palindrome string");
console.log("Time taken by function palindrome: ", t1);
console.log("Time taken by function palindromeIterative: ", t2);

const t3 = measureAvgRunTime(palindrome, str);
const t4 = measureAvgRunTime(palindromeIterative, str);

console.log("\nCase 2 : Not a palindrome string");
console.log("Time taken by function palindrome: ", t3);
console.log("Time taken by function palindromeIterative: ", t4);
