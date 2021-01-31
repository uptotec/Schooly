import * as React from 'react';
import { Layout, Row } from 'antd';
import { StudentControllerData } from '@schooly/controller';

import { SiderComponent } from '../sider/sider';
import { DashboardFooter } from '../footer/Footer';
import { DashboardTitle } from '../content/common/dashboardTitle/title';
import { StudentDashboardRouter } from '../../../../routes/studentDashboardRoutes';

import styles from './studentDashboard.module.css';

const { Content } = Layout;

export const StudentDashboard = ({ loading }: StudentControllerData) => {
  if (loading) {
    return null;
  }

  return (
    <Layout className={styles.Layout}>
      <SiderComponent />
      <Layout>
        <Content className={styles.Content}>
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
