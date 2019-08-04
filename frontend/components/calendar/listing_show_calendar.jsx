import React from 'react';
import 'react-dates/initialize';
import { DayPickerRangeController } from 'react-dates';

class ListingShowCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null
    }
  }

  render() {
    return (
      <div>
        <DayPickerRangeController
          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          endDate={this.state.endDate} // momentPropTypes.momentObj or null,
          onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          // numberOfMonths={2}
          initialVisibleMonth={() => moment().add(2, "M")} // PropTypes.func or null,
        />
      </div>
    )
  }
}

export default ListingShowCalendar;