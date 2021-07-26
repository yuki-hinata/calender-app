import AddScheduleDialog from "./presentation";
import { addscheduleCloseDialog, addscheduleSetValue } from "../../redux/addSchedule/actions";
import { connect } from 'react-redux';
import { schedulesAddItem } from "../../redux/schedules/actions";

const mapStateToProps = state => ({ schedule: state.addschedule });

  const mapDispatchToProps = dispatch => ({
    closeDialog: () => {
      dispatch(addscheduleCloseDialog());
    },
    setSchedule: value => {
      dispatch(addscheduleSetValue(value));
    },
    saveSchedule: schedule => {
      dispatch(schedulesAddItem(schedule));
      dispatch(addscheduleCloseDialog());
    }
  });

  const mergeProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    ...dispatchProps,
    saveSchedule: () => {
      const {
        schedule: { form: schedule }
      } = stateProps;
      dispatchProps.saveSchedule(schedule);
    }
  })

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
    )(AddScheduleDialog);