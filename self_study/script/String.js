

function isPalindrome(str) {

    const cleanedStr = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
    // 문자열을 뒤집어서 원래 문자열과 비교합니다.
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}
console.log(isPalindrome("A man, a plan, a canal. Panama"));


function isIsogram(str) {

    // 문자열을 모두 소문자로 변환합니다.
    const lowercasedStr = str.toLowerCase();
    // 문자열을 순회하며 각 문자의 등장 횟수를 세고, 중복이 있는지 확인합니다.
    const charCount = {};
    for (const char of lowercasedStr) {
        if (charCount[char]) {
            return false; // 중복 문자가 발견되면 false를 반환합니다.
        }
        charCount[char] = 1;
    }
    return true;
};
