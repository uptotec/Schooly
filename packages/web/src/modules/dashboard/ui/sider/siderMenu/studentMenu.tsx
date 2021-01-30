import * as React from 'react';
import { Menu } from 'antd';
import { HomeFilled } from '@ant-design/icons';

export const StudentSiderMenu = () => {
  return (
    <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
      <Menu.Item key="1" icon={<HomeFilled />}>
        Home
      </Menu.Item>
      <Menu.Item key="2" icon={<HomeFilled />}>
        Home
      </Menu.Item>
      <Menu.Item key="3" icon={<HomeFilled />}>
        Home
      </Menu.Item>
      <Menu.Item key="4" icon={<HomeFilled />}>
        Home
      </Menu.Item>
    </Menu>
  );
};
