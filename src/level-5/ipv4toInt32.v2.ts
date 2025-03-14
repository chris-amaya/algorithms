export const IPv4ToInt32 = (ip: string): number => {
    const ipAddress = ip.split('.').map(Number)
    return (
        (ipAddress[0] << 24) |
        (ipAddress[1] << 16) |
        (ipAddress[2] << 8) |
        (ipAddress[3] << 0)
    ) >>> 0;
}