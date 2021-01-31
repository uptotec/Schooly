import * as React from 'react';
import { Avatar, Typography, Space } from 'antd';
import { useStudentStore, useUserStore } from '@schooly/controller';

const { Title, Text } = Typography;

interface profileProps {
  collapsed: boolean;
}

const getFirstAndLastName = (name: string) => {
  const nameArr = name.split(' ');
  return nameArr[0] + ' ' + nameArr[1];
};

const Description = () => {
  const userType = useUserStore((state) => state.userType);
  const name = useUserStore((state) => state.name);
  const department = useStudentStore(
    (state) => state.meStudent?.class.department
  );
  const group = useStudentStore((state) => state.meStudent?.group.name);
  const facility = useStudentStore((state) => state.meStudent?.facility.name);

  if (userType === 'staff') {
    return null;
  }

  return (
    <>
      <Title level={5} style={{ fontSize: 13, margin: 0 }}>
        {getFirstAndLastName(name!)}
      </Title>
      <Text
        style={{
          fontSize: 10,
          display: 'block',
          fontWeight: 'bold',
          color: '#382d2dd9',
        }}
      >
        {department || facility}
      </Text>
      <Text
        style={{
          fontSize: 10,
          display: 'block',
          fontWeight: 'bold',
          color: '#382d2dd9',
        }}
      >
        Group {group}
      </Text>{' '}
    </>
  );
};

export const Profile = ({ collapsed }: profileProps) => {
  const name = useUserStore((state) => state.name);

  return (
    <Space
      align={collapsed ? 'center' : 'start'}
      direction="vertical"
      style={{ width: '100%', marginBottom: 35 }}
    >
      <Space align="center" style={{ height: 49 }}>
        <Avatar
          size={40}
          style={{
            background: '#f56a00',
            margin: '0 0 0 15px',
            boxShadow:
              '-1px 1px 5px rgba(245,106,0,0.2), 1px 1px 5px rgba(245,106,0,0.2)',
          }}
        >
          {name![0]}
        </Avatar>
        <Space
          align="start"
          direction="vertical"
          size={0}
          style={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          }}
        >
          {!collapsed ? <Description /> : null}
        </Space>
      </Space>
    </Space>
  );
};
