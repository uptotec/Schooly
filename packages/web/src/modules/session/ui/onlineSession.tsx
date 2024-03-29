import { OnlineSessionControllerData, useUserStore } from '@schooly/controller';
import * as React from 'react';
import Jitsi from 'react-jitsi';
import { RouteComponentProps } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

import { LoadingSpinner } from '../../shared/loadingSpinner';
import { openInNewTab } from '../../dashboard/ui/content/common/home/sessions/utils';

export const OnlineSession = ({
  match,
  data,
  loading,
}: RouteComponentProps<{ id: string }> & OnlineSessionControllerData) => {
  const { id } = match.params;
  const userName = useUserStore((state) => state.name);

  if (loading) {
    return <LoadingSpinner message="Session Loading..." />;
  }

  if (!loading && data && data.sessionJWT) {
    if (isMobile) {
      window.open(
        `https://meet.schooly.tk/${id}?jwt=${data.sessionJWT}`,
        '_self'
      );
    }
    return (
      <>
        <Jitsi
          loadingComponent={() => (
            <LoadingSpinner message="Session Loading..." />
          )}
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
            disableDeepLinking: true,
          }}
        />
      </>
    );
  }
  return <div>error</div>;
};
