import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Menu } from 'antd';

function StarHeader( onServiceChange ) {
  const navigate = useNavigate()
  return (
    <Menu
    onClick={({key})=>{
      if(key === "service"){
        onServiceChange
      }else{
        navigate(key);    
      }

    }}
      theme="dark"
      mode="horizontal"
      items={[
        { label: "StarDB", key: "/" },
        { label: "People", key: "/people" },
        { label: "Planets", key: "/planets" },
        { label: "Starships", key: "/starships" },
        { label: "Login", key: "/login" },
        { label: "Secret", key: "/secret" },
        { label: "Change Service", key: "service", danger: true },
      ]}></Menu>
  )
}


export default StarHeader;