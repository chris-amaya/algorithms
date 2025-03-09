export const humanReadableTime = (timeInSeconds: number) => {
    if(timeInSeconds > 359999)  throw new Error('Input exceeds maximum time limit')

    const hours = Math.floor(timeInSeconds / 3600)
    const minutes = Math.floor((timeInSeconds % 3600) / 60)
    const seconds = timeInSeconds % 60;

    const hourText = hours.toString().padStart(2, '0');
    const minutesText = minutes.toString().padStart(2, '0');
    const secondsText = seconds.toString().padStart(2, '0');


    return `${hourText}:${minutesText}:${secondsText}`
}