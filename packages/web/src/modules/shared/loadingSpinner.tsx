import { Spin } from 'antd';

interface props {
  message?: string;
}

export const LoadingSpinner = ({ message }: props) => (
  <div
    style={{
      background: '#F0F2F5',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Spin tip={message} size="large" />
  </div>
);
