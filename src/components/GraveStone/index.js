import React, { Component } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

export default class GraveStoneCard extends Component {
  render() {
    const { firstName, lastName } = this.props;

    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle tag="h5">{ firstName } { lastName }</CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  }
}
