import * as React from 'react';
import { Space, Divider } from 'antd';
import logo from '../../../../../assets/logo-colors.svg';
import logoMini from '../../../../../assets/logo-mini-colors.svg';
import logo2 from '../../../../../assets/bue-logo-colors.svg';

interface logosProps {
  collapsed: boolean;
}

export const Logos = ({ collapsed }: logosProps) => {
  return (
    <Space
      align="center"
      direction="vertical"
      style={{ width: '100%', margin: '35px 0px' }}
    >
      {!collapsed ? (
        <Space size={5}>
          <img
            src={logo}
            alt="logo"
            style={{ width: 'auto', height: 30, margin: '15px auto' }}
          />
          <Divider style={{ borderWidth: 2 }} type="vertical" />
          <img
            src={logo2}
            alt="logo"
            style={{ width: 'auto', height: 30, margin: '15px auto' }}
          />
        </Space>
      ) : (
        <img
          src={logoMini}
          alt="logo"
          style={{ width: 'auto', height: 30, margin: '15px auto' }}
        />
      )}
    </Space>
  );
};
