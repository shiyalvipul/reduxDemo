import React, { Component } from 'react';
import { connect } from "react-redux";
import * as action from '../redux/actions';

 class nameChange extends Component {
  state = {
    name: 'ER Vipul',
  }

  onChangeHanlder = () => {
    this.props.changeName(this.state.name);
    this.setState({
      name:this.props.newName,
    })
  }

  render() {
    console.log('sdfsadf');
    return (
      <div>
        <p>Hello {this.state.name}</p>
        <p>Dear {this.props.newName}</p>
        <button onClick={this.onChangeHanlder}>Swap</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  newName: state.nameReducer.name,
});
const mapDispatchToProps = dispatch => ({
  changeName: newName => dispatch(action.setNewName(newName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(nameChange);