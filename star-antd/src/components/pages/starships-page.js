import React, { Component } from 'react';
import { StarshipList, StarshipDetails } from '../sw-components';
import { Col, Row } from 'antd';

export default class StarshipsPage extends Component {

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
        <Col span={12}><StarshipList onItemSelected={this.onItemSelected} /></Col>
        <Col span={12}><StarshipDetails itemId={selectedItem} /></Col>
      </Row>
    )
  }
}