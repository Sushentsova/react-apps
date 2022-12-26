import React, { Component } from 'react';
import { PersonDetails, PersonList } from '../sw-components';
import { Col, Row } from 'antd';

export default class PeoplePage extends Component {

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
        <Col span={12}><PersonList onItemSelected={this.onItemSelected} /></Col>
        <Col span={12}><PersonDetails itemId={selectedItem} /></Col>
      </Row>
    );
  }
}
