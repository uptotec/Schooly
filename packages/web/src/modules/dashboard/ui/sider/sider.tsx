import * as React from 'react';
import { Layout } from 'antd';

import { StudentSiderMenu } from './siderMenu/studentMenu';
import { Profile } from './siderProfile/siderProfile';
import { Logos } from './siderLogos/siderLogos';

import styles from './sider.module.css';

const { Sider } = Layout;

export const SiderComponent = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapsed(!collapsed)}
      width={230}
      theme="light"
      className={styles.Sider}
    >
      <Logos collapsed={collapsed} />

      <Profile collapsed={collapsed} />

      <StudentSiderMenu />
    </Sider>
  );
};
