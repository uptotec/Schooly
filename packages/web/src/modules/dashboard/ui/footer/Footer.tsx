import { Layout } from 'antd';

const { Footer } = Layout;

export const DashboardFooter = () => {
  return (
    <Footer
      style={{
        maxHeight: 30,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        background: '#fff',
      }}
    >
      Schooly ©2021 Created by Mahmoud Ashraf
    </Footer>
  );
};
