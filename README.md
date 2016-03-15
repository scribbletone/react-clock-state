# react-clock-state
Simple React Mixin for Keeping Track of the Current Time

# react-clock-state
Simple React Mixin for Keeping Track of the Current Time


### Installation

`npm install --save react-clock-state`


### Usage

```
var React = require('react');

// require the package
var ClockState = require('react-clock-state');

var MyComponent = React.createClass({
  // use the mixin
  mixins: [ClockState],
  render: function() {
    return (
      <ul>
        <li>Current Hour: {this.getCurrentHour()}</li>
        <li>Current Minute: {this.getCurrentMinute()}</li>
        <li>Current Second: {this.getCurrentSecond()}</li>
        <li>Formatted Time: {this.formattedTime()}
        <li>Raw Current Date and Time: {this.state.currentDate()}
      </ul>
    );
  }
})

module.exports = MyComponent;
```

### What it gives you
- `this.state.currentDate`: After mounting, this value is updated once every second with the value of `new Date()`.
- `this.getCurrentHour(hourMode)`: Returns current hour (integer). Defaults to 12 hour clock, pass in 24 for army time.
- `this.getCurrentMinute()`: Returns current minute (integer).
- `this.getCurrentSecond()`: Returns current second (integer).
- `this.formattedTime()`: Returns a string of time in this format `hour:minute:second`. Accepts options in the parameters `{hourMode: 24}`. (more options coming soon. maybe)

### Suggestions 
It's suggested to only include the mixin once, and a very top level component. Then just pass down the functions or values to children. Or store the values in a global state system like Flux. Otherwise you run the risk of times being slightly out of of sync, sync the time is only set once every second.


### Future ideas
- Better formatting options
- A way to set the default hour mode
- Helpers for getting the calender date
