import * as React from 'react';
import { Menu } from 'antd';
import { HomeFilled, CalendarFilled, MailFilled } from '@ant-design/icons';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { openInNewTab } from '../../content/common/home/sessions/utils';
// import { FaBook, FaCheckSquare, FaClipboardCheck } from 'react-icons/fa';
// import { openInNewTab } from '../../content/common/home/sessions/utils';

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
      {/* <Menu.Item
        key="/courses"
        icon={<FaBook size={18} />}
        onClick={() => history.replace('/courses')}
      >
        Courses
      </Menu.Item> */}
      <Menu.Item
        key="/calendar"
        icon={<CalendarFilled style={{ fontSize: 18 }} />}
        onClick={() => history.replace('/calendar')}
      >
        Calendar
      </Menu.Item>
      {/* <Menu.Item
        key="/tasks"
        icon={<FaClipboardCheck size={18} />}
        onClick={() => history.replace('/tasks')}
      >
        Tasks
      </Menu.Item> */}
      {/* <Menu.Item
        key="/grades"
        icon={<FaCheckSquare size={18} />}
        onClick={() => history.replace('/grades')}
      >
        Grades
      </Menu.Item> */}
      {/* <Menu.Item
        key="mail"
        icon={<MailFilled style={{ fontSize: 18 }} />}
        onClick={() => openInNewTab('https://outlook.office.com/')}
      >
        Mail
      </Menu.Item> */}
      <Menu.Item
        key="moodle"
        icon={<MailFilled style={{ fontSize: 18 }} />}
        onClick={() => openInNewTab('http://localhost:8080/moodle/')}
      >
        Moodle
      </Menu.Item>
    </Menu>
  );
};

export const StudentSiderMenu = withRouter(X);
