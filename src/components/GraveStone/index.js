import React, { Component } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import studentShape from '../../helpers/props/studentShape';

export default class GraveStoneCard extends Component {
  static propTypes = {
    belovedStudents: studentShape,
  }

  render() {
    const { firstName, lastName, image } = this.props;

    return (
      <div className='BelovedStudentCard'>
        <Card>
          <CardBody>
            <img width="100%" src={ image } alt="Card image cap" />
            <CardTitle tag="h5">{ firstName } { lastName }</CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  }
}
