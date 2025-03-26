// WAP to check given year is leap year or not.

let year = 820;
if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
    console.log(`${year} is a Leap Year`);
} else {
    console.log(`${year} is not a Leap Year`);
}