import dayjs from 'dayjs'

import { CALENDAR_SET_MONTH } from './actions';
import { formotMonth } from '../../services/calendar';

const day = dayjs();

const init = formotMonth(day);

const calendarReducer = (state = init, action) => {
    const { type, payload } = action;
    switch(type) {
        case CALENDAR_SET_MONTH:
            return payload;
        default:
            return state;
    }
};

export default calendarReducer;