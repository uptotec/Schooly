import * as React from 'react';
import { Layout } from 'antd';
import { StudentSiderMenu } from './siderMenu/studentMenu';
import { Profile } from './siderProfile/siderProfile';
import { Logos } from './siderLogos/siderLogos';

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
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'sticky',
        left: 0,
        top: 0,
        boxShadow: '2px 2px 5px rgba(41, 128, 185, 0.05)',
      }}
    >
      <Logos collapsed={collapsed} />

      <Profile collapsed={collapsed} />

      <StudentSiderMenu />
    </Sider>
  );
};
