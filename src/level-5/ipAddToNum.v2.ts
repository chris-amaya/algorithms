// https://www.codewars.com/kata/541a354c39c5efa5fa001372

const ipToNum = (ip: string) => {
    let [oct1, oct2, oct3, oct4] = ip.split('.').map(Number)

    const int32 = ((oct1 << 24) | (oct2 << 16) | (oct3 << 8) | (oct4 << 0)) >>> 0

    return Number.parseInt(int32.toString(), 10)
}

const numToIp = (num: number) => {
    const oct1 = (num >>> 24) & 255
    const oct2 = (num >>> 16) & 255
    const oct3 = (num >>> 8) & 255
    const oct4 = (num >>> 0) & 255

    return `${oct1}.${oct2}.${oct3}.${oct4}`
}

export {
    ipToNum,
    numToIp
}