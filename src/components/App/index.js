import React, { Component } from 'react';
import SharkTank from '../SharkTank';
// import GraveYard from '../GraveYard';
import { livingStudents, dearlyBeloved } from '../../helpers/data/studentData';

export default class App extends Component {
  state = {
    liveStudents: [],
    belovedStudents: [],
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    this.setState({
      liveStudents: livingStudents(),
      belovedStudents: dearlyBeloved(),
    });
  }

  // sharkAttack = () => {
  //   const randomStudent = this.state.liveStudents[
  //     Math.floor(Math.random() * this.state.liveStudents.length)
  //   ].id;
  //   followTheLight(randomStudent);
  //   this.loadData();
  // }

  render() {
    return (
      <div className='App'>
        <button onClick={this.sharkAttack}>!!!!!SHARK ATTACK!!!!!</button>
        <SharkTank
          key={this.state.liveStudents.id}
          liveStudents={this.state.liveStudents}
        />
        {/* <GraveYard
        key={this.state.belovedStudents.id}
        liveStudents={this.state.belovedStudents}
        /> */}
    </div>
    );
  }
}
