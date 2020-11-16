import React, { Component } from 'react';
import LiveStudentCard from '../LiveStudent';

export default class SharkTank extends Component {
  render() {
    const { liveStudents } = this.props;
    const renderLiveStudentsToDom = () => liveStudents.map((student) => (
        <LiveStudentCard
          key={student.id}
          firstName={student.firstName}
          lastName={student.lastName}
          image={student.image}
        />
    ));
    return (
      <div className='SharkTank'>
        <div className='Header'>
        <h1>Shark Tank</h1>
        </div>
        <div className='LiveStudentContainer'>
          { renderLiveStudentsToDom() }
        </div>
      </div>
    );
  }
}
