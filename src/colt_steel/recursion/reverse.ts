export function reverse(str: string): string  {
    if(str.length === 0) {
        return ''
    }

    return str[str.length - 1].concat(reverse(str.slice(0, str.length - 1)))
}