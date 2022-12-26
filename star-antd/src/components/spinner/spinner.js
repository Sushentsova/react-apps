import React from 'react';
import { Spin } from 'antd';

// import './spinner.css';

const Spinner = () => {
  return (
    <div>
      <Spin tip="Loading" size="large">
        <div className="content" />
      </Spin>
    </div>
  );
};

export default Spinner;
