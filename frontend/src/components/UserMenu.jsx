import React from "react";
import { Dropdown, Space } from 'antd';
import { DownOutlined, SmileOutlined, LogoutOutlined } from '@ant-design/icons';
import { Button } from '../components/ButtonElement'

import  {store}  from '../store';

const { useModelDispatchers,  useModelState} = store;

export const UserMenu = () => {

  const { logout } = useModelDispatchers('authentication');
  const { user } = useModelState('authentication');

  const handleLogoutButtonClick = async () => {
    await logout();
  };

  const items = [
    {
      
      key: '1',
      icon: <LogoutOutlined />,
      label: 'Cerrar Sesión',
      onClick: () => handleLogoutButtonClick()
    }]

  return (
    <Dropdown menu={{ items }} >
      <Button >
      <Space>
        <Button>
          {`Hola ${user.name} `}<DownOutlined />  
          </Button>
      </Space>
    </Button>
  </Dropdown>
  );
};
