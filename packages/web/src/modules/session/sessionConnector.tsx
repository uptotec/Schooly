import { SessionController } from '@schooly/controller';
import { OnlineSession } from './ui/onlineSession';
import { RouteComponentProps } from 'react-router-dom';

export const SessionConnector = (
  routerProps: RouteComponentProps<{ id: string }>
) => {
  return (
    <SessionController>
      {(data) => <OnlineSession {...data} {...routerProps} />}
    </SessionController>
  );
};
