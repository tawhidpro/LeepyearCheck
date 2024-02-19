

// function leepyear(year){
//     let result = year  % 4;

//     if(result == 0){
//         return true;
//     }else{
//         return false;
//     }
// }


// console.log(leepyear(2024));

// function isLeapYear(year) {
//     return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
// }

// // Example usage:
// console.log(isLeapYear(2024)); // Output: true
// console.log(isLeapYear(2023)); // Output: false

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return year + " is a leap year.";
    } else {
        return year + " is not a leap year.";
    }
}

// Example usage:
console.log(isLeapYear(2024)); // Output: 2024 is a leap year.
console.log(isLeapYear(2021)); // Output: 2021 is not a leap year.

