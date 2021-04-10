import { OnlineSessionController } from '@schooly/controller';
import { OnlineSession } from './ui/onlineSession';
import { RouteComponentProps } from 'react-router-dom';

export const SessionConnector = (
  routerProps: RouteComponentProps<{ id: string }>
) => {
  return (
    <OnlineSessionController>
      {(data) => <OnlineSession {...data} {...routerProps} />}
    </OnlineSessionController>
  );
};
