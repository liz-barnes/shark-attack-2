import React, { Component } from 'react';
import GraveStoneCard from '../LiveStudent';

export default class GraveYard extends Component {
  render() {
    const { belovedStudents } = this.props;
    const renderBelovedStudentsToDom = () => belovedStudents.map((student) => (
        <GraveStoneCard
          key={student.id}
          firstName={student.firstName}
          lastName={student.lastName}
        />
    ));
    return (
      <div className='GraveYard'>
        <div className='Header'>
          <h1 className='GraveYardHeader'>Grave Yard</h1>
        </div>
        <div className='BelovedStudentContainer'>
          { renderBelovedStudentsToDom() }
        </div>
      </div>
    );
  }
}
