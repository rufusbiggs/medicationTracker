
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

export const getCurrentStock = (startDate, numPerDay: number, addedPills : number[], initialStock: number) : number => {
    const today = new Date();
    startDate = startDate.toDate();
    const isFuture = isDateFuture(startDate, today);
    const allStock = addedPills.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialStock,
      );
    if (isFuture){

        return allStock;
    } 
    else {
        const daysSinceStart = getDaysBetweenDates(today, startDate);
        const currentStock = Math.floor(allStock - (numPerDay * daysSinceStart));
        
        return currentStock;
    }
}

const isDateFuture = (date : Date, currentDate : Date) => {
    const dateTimestamp = date.getTime();
    const currentTimestamp = currentDate.getTime();
    const timeDifference = dateTimestamp - currentTimestamp;
    if (timeDifference > 0){
        return true
    } 
    else if (timeDifference <= 0){
        return false
    }
}

const getDaysBetweenDates = (date1 : Date, date2 : Date) : number => {
    const timestamp1 = date1.getTime();
    const timestamp2 = date2.getTime();
    const differenceInMs = Math.abs(timestamp2 - timestamp1);
    const daysDifference = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24));
  
    return daysDifference;
  }