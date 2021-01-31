import { useUserStore } from '@schooly/controller';
import { Typography } from 'antd';

import styles from './title.module.css';

const { Title, Text } = Typography;

const getFirstName = (name: string) => {
  return name.split(' ')[0];
};

export const DashboardTitle = () => {
  const name = useUserStore((state) => state.name);

  const nowHours = new Date().getHours();
  const greeting =
    nowHours < 12
      ? 'Good Morning'
      : nowHours < 17
      ? 'Good Afternoon'
      : 'Good Evening';
  return (
    <div className={styles.Container}>
      <Title level={2} className={styles.Title}>
        {`${greeting}, ${getFirstName(name!)}`}
      </Title>
      <Text className={styles.SubTitle}>
        Here is what you have for {nowHours < 17 ? 'today' : 'tomorrow'}
      </Text>
    </div>
  );
};
