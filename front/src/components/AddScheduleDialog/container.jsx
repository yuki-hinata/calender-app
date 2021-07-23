import AddScheduleDialog from "./presentation";
import { addscheduleCloseDialog } from "../../redux/addSchedule/actions";
import { connect } from 'react-redux';

const mapStateToProps = state => ({ schedule: state.addSchedule });

// const mapDispatchToProps = dispatch => ({
//     AddScheduleDialog: () => {
//       dispatch(addscheduleCloseDialog());
//     }
//   });

  const mapDispatchToProps = dispatch => ({
    closeDialog: () => {
      dispatch(addscheduleCloseDialog());
    }
  });

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(AddScheduleDialog);