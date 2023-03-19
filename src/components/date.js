import React from 'react';
class FormattedDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  shouldComponentUpdate(nextProps) {
    console.log(nextProps.newDate.toLocaleTimeString());
    return nextProps.newDate.getSeconds() % 2 ? false : true;
  }
  render() {
    return <h2>It is {this.props.newDate.toLocaleTimeString()}.</h2>;
  }
}
export default FormattedDate;
