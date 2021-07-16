import { StaffControllerData } from '@schooly/controller';
import * as React from 'react';
import { LoadingSpinner } from '../../../shared/loadingSpinner';
import { Layout } from 'antd';
import { SiderComponent } from '../sider/sider';
import { StaffDashboardRouter } from '../../../../routes/staffDashboardRoutes';

import styles from './staffDashboard.module.css';

const { Content } = Layout;

export const StaffDashboard = ({ loading }: StaffControllerData) => {
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <Layout>
      <SiderComponent />
      <Layout>
        <Content className={styles.Content}>
          <StaffDashboardRouter />
        </Content>
      </Layout>
    </Layout>
  );
};
