import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { MeController, MeControllerData } from '@schooly/controller';

interface props {
  data: MeControllerData
}

const C : React.FunctionComponent<RouteProps & props> = ({data: {data, loading, error}, component,...rest}) => {
  
  const RenderedComponent = (props: RouteProps) => {
    
    if(loading)
    return null

    if(error)
    return <Redirect to='/login' />
    
    const Component = component as any;

    return <Component {...props} />
  };


  return (
    <Route {...rest} render={RenderedComponent} />
  )
}

export const AuthRoute: React.FunctionComponent<RouteProps> = (props) => (
  <MeController>
      {(data) => <C data={data} {...props} />}
  </MeController>
);