import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Flex } from "ui/grid";

import NotFound from "views/not-found";

const Layout = props => {
  return <Flex minHeight="100vh">{props.children}</Flex>;
};

const DefaultRoute = props => {
  const {
    component: Component,
    path,
    history,
    isAuthenticated,
    ...rest
  } = props;

  return (
    <Layout>
      <Route {...props} component={() => <Component {...props} />} />
    </Layout>
  );
};

export default withRouter(DefaultRoute);
