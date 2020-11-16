import React, { Component } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

export default class LiveStudentCard extends Component {
  render() {
    const { firstName, lastName, image } = this.props;

    return (
      <div>
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
