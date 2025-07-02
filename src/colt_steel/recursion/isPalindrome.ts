export function isPalindrome(str: string): any {
    if(str.length === 0) return true

    const firstChar = str[0]
    const lastChar = str[str.length - 1]

    if(firstChar === lastChar) {
        return isPalindrome(str.slice(1, str.length - 1))
    } else { 
        return false
    }

    // return str[0] === str[str.length - 1] 
    //     ? isPalindrome(str.slice(1, str.length - 1))
    //     : false
}