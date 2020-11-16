import React, { Component } from 'react';
import SharkTank from '../SharkTank';
import GraveYard from '../GraveYard';
import {
  livingStudents,
  dearlyBeloved,
  followTheLight,
} from '../../helpers/data/studentData';

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
  };

  sharkAttack = () => {
    if (this.state.liveStudents.length) {
      const randomStudent = this.state.liveStudents[
        Math.floor(Math.random() * this.state.liveStudents.length)
      ].id;
      console.warn('randomstudent', randomStudent);
      followTheLight(randomStudent);
      this.loadData();
    }
  };

  render() {
    const { liveStudents, belovedStudents } = this.state;
    return (
      <div className="App">
        <button onClick={this.sharkAttack}>!!!!!SHARK ATTACK!!!!!</button>
        <SharkTank
          key={liveStudents.id}
          liveStudents={liveStudents}
        />
        <GraveYard
        key={belovedStudents.id}
        belovedStudents={belovedStudents}
        />
      </div>
    );
  }
}
