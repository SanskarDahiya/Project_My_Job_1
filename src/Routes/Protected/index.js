import { Suspense, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import routes from "./path"; // Route list
import { useLocation, useHistory } from "react-router-dom";

const ProtectedRoutes = () => {
  const { pathname } = useLocation();
  const { push } = useHistory();

  useEffect(() => {
    if (pathname == "/") {
      push("/home");
    }
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {routes.map(({ component: Component, path, exact }) => (
          <Route path={`${path}`} key={path} exact={exact}>
            <Component />
          </Route>
        ))}
        <Redirect from="*" to={{ pathname: "/notfound" }} />
      </Switch>
    </Suspense>
  );
};

export default ProtectedRoutes;
