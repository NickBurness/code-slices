/*

Convert number to reversed array of digits

Given a random number:

    C#: long;
    C++: unsigned long;

You have to return the digits of this number within an array in reverse order.
Example:

348597 => [7,9,5,8,4,3]

*/

function digitize(n) {
    let arr = [];
    arr = n.toString().split('').reverse();
    let newArr = arr.map(num => parseInt(num));
    return newArr;
}