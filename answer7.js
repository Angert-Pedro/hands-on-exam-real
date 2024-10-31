/*  numbers = [2, 20, 3, 7, 10, 4, 4, 7, 9, 12, 15, 14, 11, 10, 13, 10, 20, 16, 12, 16];
write a program to delete all duplicate numbers, 
leaving only distinct numbers from the original list. 
Also, return the array sorted. (1 point)
*/

const numbers = [2, 20, 3, 7, 10, 4, 4, 7, 9, 12, 15, 14, 11, 10, 13, 10, 20, 16, 12, 16];

const NoRepeatNumbers = new Set(numbers);

const SortedNoRepeatNumbers = [...NoRepeatNumbers].sort((a, b) => a - b);

console.log(SortedNoRepeatNumbers);