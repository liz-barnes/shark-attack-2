import React, { Component } from 'react';
import GraveStoneCard from '../LiveStudent';
import studentShape from '../../helpers/props/studentShape';

export default class GraveYard extends Component {
  static propTypes = {
    belovedStudents: studentShape,
  }

  render() {
    const { belovedStudents } = this.props;
    const renderBelovedStudentsToDom = () => belovedStudents.map((student) => (
        <GraveStoneCard
          key={student.id}
          firstName={student.firstName}
          lastName={student.lastName}
          image={student.image}
        />
    ));
    return (
      <div className='GraveYard'>
        <div className='Header'>
          {/* <h1 className='GraveYardHeader'>Grave Yard</h1> */}
        </div>
        <div className='BelovedStudentContainer'>
          { renderBelovedStudentsToDom() }
        </div>
      </div>
    );
  }
}
