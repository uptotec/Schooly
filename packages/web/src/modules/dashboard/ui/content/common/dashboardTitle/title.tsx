import { useStudentStore, useUserStore } from '@schooly/controller';
import { Typography } from 'antd';

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
    <div style={{ marginBottom: 32 }}>
      <Title level={2} style={{ fontWeight: 500, margin: 0 }}>
        {`${greeting}, ${getFirstName(name!)}`}
      </Title>
      <Text style={{ fontWeight: 400, color: '#8a8a8a' }}>
        Here is what you have for today
      </Text>
    </div>
  );
};
