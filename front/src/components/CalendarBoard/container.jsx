import { connect } from 'react-redux';
import { createCalendar } from '../../services/calendar'
import { addscheduleOpenDialog, addscheduleSetValue } from "../../redux/addSchedule/actions";
import CalendarBoard from './presentation';
import { setSchedules } from '../../services/schedule';
import { 
  currentScheduleSetItem,
  currentScheduleOpenDialog
} from '../../redux/currentSchedule/actions';  

const mapStateToProps = state => ({ 
    calendar: state.calendar,
    schedules: state.schedules
  });

const mapDispatchToProps = dispatch => ({
    openAddscheduleDialog: d => {
      dispatch(addscheduleOpenDialog());
      dispatch(addscheduleSetValue({ date: d }));
    },
    openCurrentScheduleDialog: (schedule, e) => {
      e.stopPropagation();

      dispatch(currentScheduleSetItem(schedule));
      dispatch(currentScheduleOpenDialog());
    } 
  });

const mergeProps = (stateProps, dispatchProps ) => {
    const {
      calendar: month,
      schedules: { items: schedules }
    } = stateProps;

    const calendar = setSchedules(createCalendar(month), schedules);

    return {
      ...stateProps,
      ...dispatchProps,
      calendar,
      month
    }
};

export default connect(mapStateToProps,mapDispatchToProps,mergeProps)(CalendarBoard);