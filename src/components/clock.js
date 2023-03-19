import React from 'react';
import FormattedDate from '../components/date';

class ClockComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), time: new Date().toDateString() };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    console.log(this.state);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    const { src } = this.props;
    return (
      <>
        <p>{this.state.time}</p>
        <FormattedDate newDate={this.state.date} />
        <p>{this.props.nameofimg}</p>
        <img src={src} alt="oh" width="400" height="300" />
      </>
    );
  }
}
export default ClockComponent;
