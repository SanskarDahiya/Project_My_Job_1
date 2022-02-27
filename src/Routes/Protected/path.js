import { lazy } from "react";
const routes = [
  {
    path: "/home",
    component: lazy(() => import("../../Screens/Home")),
    exact: true
  }
  // {
  // path: "*",
  // component: lazy(() => import("../404")),
  // exact: true
  // }
];

export default routes;
