import { SessionControllerData, useUserStore } from '@schooly/controller';
import * as React from 'react';
import Jitsi from 'react-jitsi';
import { RouteComponentProps } from 'react-router-dom';

export const OnlineSession = ({
  match,
  data,
  loading,
}: RouteComponentProps<{ id: string }> & SessionControllerData) => {
  const { id } = match.params;
  const userName = useUserStore((state) => state.name);

  if (loading) {
    return <div>session Loading....</div>;
  }

  if (!loading && data && data.sessionJWT) {
    return (
      <>
        <Jitsi
          jwt={data.sessionJWT}
          containerStyle={{ width: '100%', height: '100vh' }}
          displayName={userName!}
          domain="meet.schooly.tk"
          roomName={id}
          noSSL={false}
          interfaceConfig={{
            DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
          }}
          config={{
            startWithVideoMuted: true,
            startWithAudioMuted: true,
          }}
        />
      </>
    );
  }
  return <div>error</div>;
};
