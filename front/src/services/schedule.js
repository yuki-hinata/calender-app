import { isSameday } from './calendar';

export const setSchedules = (calendar, schedules) =>
    calendar.map(c => ({
        date: c,
        schedules: schedules.filter(e => isSameday(e.date, c))
    }));