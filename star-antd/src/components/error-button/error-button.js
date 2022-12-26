import React, { Component } from 'react';
import { Button } from 'antd';

import './error-button.css';

export default class ErrorButton extends Component {

  state = {
    renderError: false
  };

  render() {
    if (this.state.renderError) {
      this.foo.bar = 0;
    }

    return (

      <Button
        type="primary"
        danger
        onClick={() => this.setState({renderError: true})}>
        Throw Error
      </Button>
    );
  }
}
