var React = require('react');

var ClockState = {
  getInitialState: function() {
    return {
      currentDate: new Date()
    };
  },
  componentDidMount: function() {
    setInterval(this.setCurrentTime, 1000);
  },
  getCurrentHour: function(hourMode){
    hourMode = hourMode || 12;
    var hour = this.state.currentDate.getHours() % hourMode;
    
    if (hour == 0 && hourMode == 12) {
      hour = 12;
    }
    return hour;
  },
  getCurrentMinute: function(){
    return this.state.currentDate.getMinutes();
  },
  getCurrentSecond: function(){
    return this.state.currentDate.getSeconds();
  },
  setCurrentTime: function(){
    this.setState({
      currentDate: new Date()
    });
  },
  formattedTime: function(opts){
    opts = opts || {hourMode: 12};
    return this.getCurrentHour(opts.hourMode) + ':' + this.getCurrentMinute() + ':' +  this.getCurrentSecond();
  }
};

module.exports = ClockState;