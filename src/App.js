import React from 'react';
import { connect } from 'react-redux';
import {set_data} from './store/action/action';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    // console.log(this.props);
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>{this.state.count} </h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          Decrement
        </button>
        <p>{this.props.name}</p>
        <p>{this.props.email}</p>
        <br />
        <button onClick={() => this.props.set_data('data coming from component to reducer')}>Set Data</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.auth.name,
    email: state.auth.email,
    app_name: state.app.app_name,
  };
};
const mapDispatchToProps = (dispatch) => ({
  set_data: (data) => dispatch(set_data(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
