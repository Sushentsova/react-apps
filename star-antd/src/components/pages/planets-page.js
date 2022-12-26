import React, { Component } from 'react';
import { PlanetDetails, PlanetList } from '../sw-components';
import { Col, Row } from 'antd';

export default class PlanetsPage extends Component {

  state = {
    selectedItem: null
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;

    return (
      <Row>
        <Col span={12}><PlanetList onItemSelected={this.onItemSelected} /></Col>
        <Col span={12}><PlanetDetails itemId={selectedItem} /></Col>
      </Row>
    );
  }
}
