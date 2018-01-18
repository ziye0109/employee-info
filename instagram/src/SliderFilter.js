import React from 'react';
import './SliderFilter.css';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

export default class SliderFilter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        lowerBound: 0,
        upperBound: 100,
        value: [15, 50],
      };
    }
    onLowerBoundChange = (e) => {
      this.setState({ lowerBound: e.target.value });
    }
    onUpperBoundChange = (e) => {
      this.setState({ upperBound: e.target.value });
    }
    onSliderChange = (value) => {
      console.log(value);
      this.setState({
        value,
      });
    }
    handleApply = () => {
      const { lowerBound, upperBound } = this.state;
      this.setState({ value: [lowerBound, upperBound] });
    }
    render() {
      return (
        <div>
          <Range allowCross={false} min={this.state.lowerBound} max={this.state.upperBound} value={this.state.value} onChange={this.onSliderChange} tipFormatter={value => `${value}`}  />
        </div>
      );
    }
  }
  