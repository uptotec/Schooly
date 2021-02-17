import * as React from 'react';
import { Avatar, Typography, Space } from 'antd';
import {
  useStaffStore,
  useStudentStore,
  useUserStore,
} from '@schooly/controller';

import styles from './siderProfile.module.css';

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

  const staffFacility = useStaffStore((state) => state.meStaff?.facility.name);

  if (userType === 'staff') {
    return (
      <>
        <Title level={5} className={styles.Name}>
          {getFirstAndLastName(name!)}
        </Title>
        <Text className={styles.Description}>
          {`Facility of ${staffFacility}` || null}
        </Text>
      </>
    );
  }

  return (
    <>
      <Title level={5} className={styles.Name}>
        {getFirstAndLastName(name!)}
      </Title>
      <Text className={styles.Description}>{department || facility}</Text>
      <Text className={styles.Description}>Group {group}</Text>{' '}
    </>
  );
};

export const Profile = ({ collapsed }: profileProps) => {
  const name = useUserStore((state) => state.name);

  return (
    <Space
      align={collapsed ? 'center' : 'start'}
      direction="vertical"
      className={styles.Spacer}
    >
      <Space align="center" className={styles.AvatarSpacer}>
        <Avatar
          size={40}
          className={styles.Avatar}
          style={{ margin: !collapsed ? '0 0 0 15px' : '0 0 0 9px' }}
        >
          {name![0]}
        </Avatar>
        <Space
          align="start"
          direction="vertical"
          size={0}
          className={styles.DescriptionSpacer}
        >
          {!collapsed ? <Description /> : null}
        </Space>
      </Space>
    </Space>
  );
};
