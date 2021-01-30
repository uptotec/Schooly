import * as React from 'react';
import { Avatar, Typography, Space } from 'antd';

const { Title, Text } = Typography;

interface profileProps {
  collapsed: boolean;
}

export const Profile = ({ collapsed }: profileProps) => {
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
          M
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
          {!collapsed ? (
            <>
              <Title level={5} style={{ fontSize: 13, margin: 0 }}>
                Mahmoud Ashraf Mahmoud
              </Title>
              <Text
                style={{
                  fontSize: 10,
                  display: 'block',
                  fontWeight: 'bold',
                  color: '#382d2dd9',
                }}
              >
                Computer Engineering DY1
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  display: 'block',
                  fontWeight: 'bold',
                  color: '#382d2dd9',
                }}
              >
                Group A2
              </Text>{' '}
            </>
          ) : null}
        </Space>
      </Space>
    </Space>
  );
};
