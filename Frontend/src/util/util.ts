export function getRandomIntInRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function calculateTimeBetweenDates(date1: Date, date2: Date = new Date()): number {
    // To calculate the time difference of two dates
    let timeDifference = date2.getTime() - date1.getTime();

    // To calculate the no. of days between two dates
    let daysDifference =
        Math.round(timeDifference / (1000 * 3600 * 24));

    return daysDifference
}

export enum TimeDifferenceStringModes {
    past = 'past',
    future = 'future'
}

interface ITimeDifferenceString {
    date: Date,
    //mode: TimeDifferenceStringModes

}

export function timeDifferenceString({ date }: ITimeDifferenceString) {

    const now = new Date()
    var seconds = Math.floor((now.getTime() - (date.getTime())) / 1000);

    var interval = seconds / 31536000;

    if (now.getTime() < date.getTime()) {
        if (isToday(date)) {
            const timeString = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });
            return `Today at ${timeString}`;
        }

        if (isSameWeek(date, now)) {
            const dayName = getDayName(date.getDay());
            const timeString = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });
            return `This ${dayName} at ${timeString}`;
        }

        const dayOfWeek = getDayOfWeek(date);
        if (dayOfWeek !== -1) {
            const dayName = getDayName(dayOfWeek);
            const timeString = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });
            return `Next ${dayName} at ${timeString}`;
        }
    } else {
        const daysAgo = Math.floor(seconds / 86400);
        return `${daysAgo} days ago`;
    }

    if (interval > 1) {
        return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}


function isToday(date: number | Date): boolean {
    const today = new Date();
    return (
        date instanceof Date &&
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
    );
}

// Helper function to check if the given date is a specific day of the week
function getDayOfWeek(date: number | Date): number {
    return (date instanceof Date) ? date.getDay() : -1;
}

// Helper function to get the day name based on the day index
function getDayName(dayIndex: number): string {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[dayIndex];
}

// Helper function to check if two dates are in the same week
function isSameWeek(date1: Date, date2: Date): boolean {
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);
    const weekStart = new Date(firstDate.setDate(firstDate.getDate() - firstDate.getDay()));
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 6);

    return secondDate >= weekStart && secondDate <= weekEnd;
}

export function isDateInFuture(date: Date): boolean {
    const now = new Date().getTime()
    return date.getTime() > now

}

interface IIsValueInRange {
    low?: number | null,
    high?: number | null,
    value: number | string
}

export function isValueInRange({ low, high, value }: IIsValueInRange) {
    let numericValue: number;

    if (typeof value === 'string') {
        numericValue = value.length;
    } else {
        numericValue = value;
    }

    if (low == null) {
        return numericValue <= (high as number);
    }

    if (high == null) {
        return numericValue >= (low as number);
    }

    return numericValue >= (low as number) && numericValue <= (high as number);
}

export function capitaliseFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}