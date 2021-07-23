import { combineReducers } from 'redux';
import calendarReducer from './calendar/reducer';
import addscheduleReducer from './addSchedule/reducer';

const rootReducer = combineReducers({ 
    calendar: calendarReducer,
    addschedule: addscheduleReducer

    });

export default rootReducer;