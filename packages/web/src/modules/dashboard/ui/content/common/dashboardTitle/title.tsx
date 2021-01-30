import { Typography } from 'antd';

const { Title, Text } = Typography;

export const DashboardTitle = () => {
  return (
    <div>
      <Title level={2} style={{ fontWeight: 500, margin: 0 }}>
        Good Morning, Mahmoud
      </Title>
      <Text style={{ fontWeight: 400, color: '#8a8a8a' }}>
        Here is what you have for today
      </Text>
    </div>
  );
};
