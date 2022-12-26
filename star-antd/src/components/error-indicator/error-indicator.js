import React from 'react';
import { Typography } from 'antd';
import { WarningOutlined } from'@ant-design/icons';

// import './error-indicator.css';

const { Text, Title } = Typography;

const ErrorIndicator = () => {
  return (
    <div             
      style={{
        padding: 24,
        textAlign: 'center',
      }}>
      <WarningOutlined  
        style={{
          fontSize: '100px',
          color: 'red',
        }}
      />
      <Title type="danger">BOOM!!!</Title>
      <Text type="danger">
        Something has gone terribly wrong, but we already sent droids to fix it
      </Text>
      <Text type="danger">
        but we already sent droids to fix it
      </Text>
    </div>
  );
};

export default ErrorIndicator;
