/*Write a program to rotate elements of an array to the right by a given number of positions. (1 point)
Example: 
nums = [1,2,3,4,5,6,7]
stepsToTheRight(nums, 3) 
Output should be: [5,6,7,1,2,3,4]*/


function MoveToTheRight(num, k) {
    k = k & num.length;

    if ( k === 0) return num;

    const rotate = num.slice(-k).concat(num.slice(0, num.length - k));

    return rotate;

}


const num = [1, 2, 3, 4, 5 , 6, 7];
const result = MoveToTheRight(num, 3);
console.log(result);