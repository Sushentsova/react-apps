import React from 'react';
import { Navigate } from 'react-router-dom';
import { Button, Space } from 'antd';

const LoginPage = ({ isLoggedIn, onLogin }) => {

  if (isLoggedIn) {
    return <Navigate to="/"/>;
  }

  return (
    <Space wrap>
      <p>Login to see secret page!</p>
      <Button onClick={onLogin}>
        Login</Button>
    </Space>
  );
};

export default LoginPage;