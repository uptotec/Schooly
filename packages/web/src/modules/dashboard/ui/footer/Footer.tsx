import { Layout } from 'antd';

import styles from './Footer.module.css';

const { Footer } = Layout;

export const DashboardFooter = () => {
  return (
    <Footer className={styles.Footer}>
      Schooly ©2021 Created by Mahmoud Ashraf
    </Footer>
  );
};
