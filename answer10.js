function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

const testString1 = "madam";
const testString2 = "nurses run";
const testString3 = "hello";

console.log(`${testString1} is palindrome: ${isPalindrome(testString1)}`); // true
console.log(`${testString2} is palindrome: ${isPalindrome(testString2)}`); // true
console.log(`${testString3} is palindrome: ${isPalindrome(testString3)}`); // false