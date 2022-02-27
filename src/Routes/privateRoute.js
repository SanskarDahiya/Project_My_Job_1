import { Route, Redirect } from "react-router-dom";
import routes from "./Protected/path"; // Route list
const paths = new Set(routes.map(({ path }) => path));
paths.add("/");
function PrivateRoute({ children, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (isAuthenticated()) {
          return children;
        }
        let pathname = "/login";
        if (!paths.has(location?.pathname)) {
          pathname = "/notfound";
        }
        return <Redirect to={{ pathname, state: { from: location } }} />;
      }}
    />
  );
}

export default PrivateRoute;
