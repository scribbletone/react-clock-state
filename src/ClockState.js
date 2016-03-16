var React = require('react');

var ClockState = {
  getInitialState: function() {
    return {
      currentDate: new Date(),
      timeZoneOffset: 0
    };
  },
  componentDidMount: function() {
    setInterval(this.setCurrentTime, 1000);
  },
  setTimeZoneOffset: function(hoursOffset){
    this.setState({
      timeZoneOffset: hoursOffset 
    });
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
  getUTCtime: function(){
    var date = new Date();
    var clientOffset = date.getTimezoneOffset();
    return new Date(date.getTime() + (clientOffset * 60 * 1000));
  },
  setCurrentTime: function(){
    var dateUTC = this.getUTCtime();
    var date = new Date(dateUTC.getTime() + (this.state.timeZoneOffset * 60 * 60 * 1000));

    this.setState({
      currentDate: date
    });
  },
  formattedTime: function(opts){
    opts = opts || {hourMode: 12};
    return this.getCurrentHour(opts.hourMode) + ':' + this.getCurrentMinute() + ':' +  this.getCurrentSecond();
  }
};

module.exports = ClockState;