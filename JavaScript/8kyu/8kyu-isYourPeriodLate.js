/* 
In this kata, we will make a function to test whether a period is late.

Our function will take three parameters:

last - The Date object with the date of the last period

today - The Date object with the date of the check

cycleLength - Integer representing the length of the cycle in days

If the today is later from last than the cycleLength, the function should return true. We consider it to be late if the number of passed days is larger than the cycleLength. Otherwise return false.
*/

const periodIsLate = (last, today, cycleLength) => {
    let days = Math.floor(today - last) / 86400000;
    return days > cycleLength ? true : false;
}