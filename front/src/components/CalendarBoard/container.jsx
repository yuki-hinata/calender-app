import { connect } from 'react-redux';
import { createCalendar } from '../../services/calendar'
import { addscheduleOpenDialog } from "../../redux/addSchedule/actions";
import CalendarBoard from './presentation';

const mapStateToProps = state => ({ calendar: state.calendar });

const mapDispatchToProps = dispatch => ({
    openAddscheduleDialog: () => {
      dispatch(addscheduleOpenDialog());
    }
  });

const mergeProps = (stateProps, dispatchProps ) => ({
    ...stateProps,
    ...dispatchProps,
    month: stateProps.calendar,
    calendar: createCalendar(stateProps.calendar)
});

export default connect(mapStateToProps,mapDispatchToProps,mergeProps)(CalendarBoard);