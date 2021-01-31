import * as React from 'react';
import { Layout, Row } from 'antd';
import { SiderComponent } from '../sider/sider';
import { DashboardFooter } from '../footer/Footer';
import { DashboardTitle } from '../content/common/dashboardTitle/title';
import { StudentDashboardRouter } from '../../../../routes/studentDashboardRoutes';
import { StudentControllerData } from '@schooly/controller';

const { Content } = Layout;

export const StudentDashboard = ({ loading }: StudentControllerData) => {
  if (loading) {
    return null;
  }

  return (
    <Layout style={{ minHeight: '100vh', background: '#ffffff' }}>
      <SiderComponent />
      <Layout style={{ background: '#F2F5FA' }}>
        <Content style={{ margin: '40px 25px' }}>
          <Row>
            <DashboardTitle />
          </Row>
          <Row>
            <StudentDashboardRouter />
          </Row>
        </Content>
        <DashboardFooter />
      </Layout>
    </Layout>
  );
};
