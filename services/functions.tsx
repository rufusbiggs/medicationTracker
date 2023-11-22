
export const calculateFutureDate = (daysToAdd: number): string => {
    const today = new Date();
    const futureDate = new Date();
    futureDate.setDate(today.getDate() + daysToAdd);
    const day = futureDate.getDate();
    const month = futureDate.toLocaleString('default', { month: 'short' });
    const year = futureDate.getFullYear();

    return `${day} ${month} ${year}`;
}

export const daysLeft = (numPills: number, numPerDay: number) : number => {
    const daysLeft = numPills / numPerDay;

    return daysLeft;
}

export const runsOut = (numPills: number, numPerDay: number) : string => {
    const days = daysLeft(numPills, numPerDay);

    return calculateFutureDate(days);
}