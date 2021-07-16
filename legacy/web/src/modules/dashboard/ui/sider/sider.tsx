import * as React from 'react';
import { Layout, Divider } from 'antd';

import { StudentSiderMenu } from './siderMenu/studentMenu';
import { Profile } from './siderProfile/siderProfile';
import { Logos } from './siderLogos/siderLogos';

import styles from './sider.module.css';
import { SettingsSiderMenu } from './siderMenu/settingsMenu';

const { Sider } = Layout;

export const SiderComponent = () => {
  const [collapsed] = React.useState(false);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      trigger={() => null}
      width={230}
      theme="light"
      className={styles.Sider}
      // onMouseEnter={() => setCollapsed(false)}
      // onMouseLeave={() => setCollapsed(true)}
    >
      <Logos collapsed={collapsed} />

      <Profile collapsed={collapsed} />

      <StudentSiderMenu />
      <Divider />
      <SettingsSiderMenu />
    </Sider>
  );
};
