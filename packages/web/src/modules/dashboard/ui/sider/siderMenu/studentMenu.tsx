import * as React from 'react';
import { Menu } from 'antd';
import { HomeFilled, CalendarFilled } from '@ant-design/icons';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { HiUserGroup } from 'react-icons/hi';
import { FaBook, FaCheckSquare, FaClipboardCheck } from 'react-icons/fa';

const X = ({ history, location }: RouteComponentProps) => {
  const defaultPath = location.pathname;
  return (
    <Menu theme="light" defaultSelectedKeys={[defaultPath]} mode="inline">
      <Menu.Item
        key="/"
        icon={<HomeFilled style={{ fontSize: 18 }} />}
        onClick={() => history.push('/')}
      >
        Home
      </Menu.Item>
      <Menu.Item
        key="/courses"
        icon={<FaBook size={18} />}
        onClick={() => history.replace('/courses')}
      >
        Courses
      </Menu.Item>
      <Menu.Item
        key="/calendar"
        icon={<CalendarFilled style={{ fontSize: 18 }} />}
        onClick={() => history.replace('/calender')}
      >
        Calendar
      </Menu.Item>
      <Menu.Item
        key="/tasks"
        icon={<FaClipboardCheck size={18} />}
        onClick={() => history.replace('/tasks')}
      >
        Tasks
      </Menu.Item>
      <Menu.Item
        key="/sessions"
        icon={<HiUserGroup size={18} />}
        onClick={() => history.replace('/sessions')}
      >
        Sessions
      </Menu.Item>
      <Menu.Item
        key="/grades"
        icon={<FaCheckSquare size={18} />}
        onClick={() => history.replace('/grades')}
      >
        Grades
      </Menu.Item>
    </Menu>
  );
};

export const StudentSiderMenu = withRouter(X);
