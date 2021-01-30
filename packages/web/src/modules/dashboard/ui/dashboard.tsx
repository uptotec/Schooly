import * as React from 'react';
import { Layout, Row } from 'antd';
import { Redirect } from 'react-router-dom';
import { LogoutControllerData } from '@schooly/controller';
import { useIdleTimer } from 'react-idle-timer';
import { SiderComponent } from './sider/sider';
import { DashboardFooter } from './footer/Footer';
import { DashboardTitle } from './content/common/dashboardTitle/title';
import { DashboardRouter } from '../../../routes/dashboardRoutes';

const { Content } = Layout;

export const Dashboard = ({
  loading,
  logout,
  called,
}: LogoutControllerData) => {
  const handleOnIdle = () => {
    console.log('idle');
    if (!called) {
      logout();
    }
  };

  useIdleTimer({
    timeout: 1000 * 60 * 30,
    onIdle: handleOnIdle,
    stopOnIdle: true,
  });

  if (!loading && called) {
    return <Redirect to="/login" />;
  } else {
    return (
      <Layout style={{ minHeight: '100vh', background: '#ffffff' }}>
        <SiderComponent />
        <Layout style={{ background: '#F2F5FA' }}>
          <Content style={{ margin: '40px 25px' }}>
            <Row>
              <DashboardTitle />
            </Row>
            <Row>
              <DashboardRouter />
            </Row>
          </Content>
          <DashboardFooter />
        </Layout>
      </Layout>
    );
  }
};
