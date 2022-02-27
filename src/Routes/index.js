import { useCallback } from "react";
import { Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import ProtectedRoutes from "./Protected";
import PublicRoute from "./publicRoute";
import PrivateRoute from "./privateRoute";
import { Login } from "../Screens";
import NotFoundPage from "./404";
const Routes = () => {
  const accessToken = useSelector(state => state?.persistedSlice?.accessToken);

  const isAuthenticated = useCallback(() => {
    if (accessToken) {
      return true;
    } else {
      return false;
    }
  }, [accessToken]);

  return (
    <Switch>
      <PublicRoute path="/login" isAuthenticated={isAuthenticated}>
        <Login />
      </PublicRoute>

      <PublicRoute path="/notfound" isAuthenticated={() => false}>
        <NotFoundPage />
      </PublicRoute>

      <PrivateRoute path="/" isAuthenticated={isAuthenticated}>
        <ProtectedRoutes />
      </PrivateRoute>
      <Redirect from="*" to={{ pathname: "/notfound" }} />
    </Switch>
  );
};

export default Routes;
