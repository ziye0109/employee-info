import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


export default class FilterDatePicker extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        startDate: moment()
      };
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(date) {
    
      console.log(date);
      this.setState({
        startDate: date
      });
    }
  
    render() {
      return <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          isClearable={true}
          calendarClassName="filter-datepicker"
      />;
    }
  }