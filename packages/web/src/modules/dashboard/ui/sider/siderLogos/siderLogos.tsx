import * as React from 'react';
import { Space, Divider } from 'antd';

import logo from '../../../../../assets/logo-colors.svg';
import logoMini from '../../../../../assets/logo-mini-colors.svg';
import logo2 from '../../../../../assets/bue-logo-colors.svg';

import styles from './siderLogos.module.css';

interface logosProps {
  collapsed: boolean;
}

export const Logos = ({ collapsed }: logosProps) => {
  return (
    <Space align="center" direction="vertical" className={styles.Spacer}>
      {!collapsed ? (
        <Space size={5}>
          <img src={logo} alt="logo" className={styles.Logo} />
          <Divider style={{ borderWidth: 2 }} type="vertical" />
          <img src={logo2} alt="logo" className={styles.Logo} />
        </Space>
      ) : (
        <img src={logoMini} alt="logo" className={styles.Logo} />
      )}
    </Space>
  );
};
