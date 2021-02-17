import { StaffControllerData } from '@schooly/controller';
import * as React from 'react';
import { LoadingSpinner } from '../../../shared/loadingSpinner';
import { Layout } from 'antd';
import { SiderComponent } from '../sider/sider';

export const StaffDashboard = ({ loading }: StaffControllerData) => {
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <Layout>
      <SiderComponent />
    </Layout>
  );
};
