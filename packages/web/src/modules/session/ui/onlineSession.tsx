import { SessionControllerData, useUserStore } from '@schooly/controller';
import { Spin } from 'antd';
import * as React from 'react';
import Jitsi from 'react-jitsi';
import { RouteComponentProps } from 'react-router-dom';

const LoadingSpinner = () => (
  <div
    style={{
      background: '#F0F2F5',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Spin tip="session loading..." size="large" />
  </div>
);

export const OnlineSession = ({
  match,
  data,
  loading,
}: RouteComponentProps<{ id: string }> & SessionControllerData) => {
  const { id } = match.params;
  const userName = useUserStore((state) => state.name);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!loading && data && data.sessionJWT) {
    return (
      <>
        <Jitsi
          loadingComponent={() => <LoadingSpinner />}
          jwt={data.sessionJWT}
          containerStyle={{ width: '100%', height: '100vh' }}
          displayName={userName!}
          domain="meet.schooly.tk"
          roomName={id}
          noSSL={false}
          interfaceConfig={{
            DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
            SHOW_PROMOTIONAL_CLOSE_PAGE: true,
          }}
          config={{
            startWithVideoMuted: true,
            startWithAudioMuted: true,
            desktopSharingFrameRate: { min: 25, max: 30 },
          }}
        />
      </>
    );
  }
  return <div>error</div>;
};
