import { combineReducers } from 'redux';
import calendarReducer from './calendar/reducer';
import addscheduleReducer from './addSchedule/reducer';
import schedulesReducer from './schedules/reducer';
import currentScheduleReducer from './currentSchedule/reducer';

const rootReducer = combineReducers({ 
    calendar: calendarReducer,
    addschedule: addscheduleReducer,
    schedules: schedulesReducer,
    currentSchedule: currentScheduleReducer
    });

export default rootReducer;