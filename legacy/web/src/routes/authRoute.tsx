import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { MeController, MeControllerData } from '@schooly/controller';
import { LoadingSpinner } from '../modules/shared/loadingSpinner';

interface props {
  data: MeControllerData;
}

interface authRouteProps {
  roles?: string[];
}

const C: React.FunctionComponent<RouteProps & props & authRouteProps> = ({
  data: { data, loading, error },
  component,
  children,
  roles,
  ...rest
}) => {
  const RenderedComponent = (props: RouteProps) => {
    if (loading) return <LoadingSpinner />;

    if (error) return <Redirect to="/login" />;

    if (data && data.me && roles && roles.length !== 0) {
      let flag = true;
      for (const role of roles) {
        if (data.me.userType === role) {
          flag = false;
        }
        if (flag) {
          return <Redirect to="/" />;
        }
      }
    }

    const Component = (component as any) || (children as any);

    return <Component {...props} />;
  };

  return <Route {...rest} render={RenderedComponent} />;
};

export const AuthRoute: React.FunctionComponent<RouteProps & authRouteProps> = (
  props
) => <MeController>{(data) => <C data={data} {...props} />}</MeController>;
