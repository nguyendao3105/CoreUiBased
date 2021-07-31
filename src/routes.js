import React from "react";
const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const Users = React.lazy(() => import("./views/users/Users"));
const User = React.lazy(() => import("./views/users/User"));

const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));

//project

const DanhHieus = React.lazy(() => import("./views/DanhHieu/Danhhieus"));
const RequestsActionPage = React.lazy(() =>
  import("./views/Request/RequestsActionPage")
);
const DanhHieu = React.lazy(() => import("./views/DanhHieu/Danhhieu"));
const ProofImg = React.lazy(() => import("./views/Request/RequestImg"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/page404", name: "Not found", component: Page404 },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },

  { path: "/users", exact: true, name: "Users", component: Users },
  { path: "/users/:id", exact: true, name: "User Details", component: User },
  { path: "/danhhieus", exact: true, name: "Danh Hieu", component: DanhHieus },
  {
    path: "/danhhieus/:id",
    exact: true,
    name: "Chi tiết danh hiệu",
    component: DanhHieu,
  },
  {
    path: "/request",
    exact: true,
    name: "Request",
    component: RequestsActionPage,
  },
  {
    path: "/proofImg/:id/:fileName",
    exact: true,
    name: "Proof Image",
    component: ProofImg,
  },
];

export default routes;
