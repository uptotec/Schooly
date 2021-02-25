import * as React from 'react';
import { Menu } from 'antd';
import { FaSignOutAlt } from 'react-icons/fa';
import { useLogoutStore } from '@schooly/controller';

export const SettingsSiderMenu = () => {
  const Logout = useLogoutStore((state) => state.logout);
  return (
    <Menu theme="light" mode="inline">
      <Menu.Item
        key="1"
        icon={<FaSignOutAlt size={18} />}
        onClick={() => Logout!()}
      >
        Logout
      </Menu.Item>
    </Menu>
  );
};
