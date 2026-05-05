import { createBrowserRouter, Navigate } from "react-router";
import MyPage from "../pages/my-page/my-page";
import Login from "../pages/login/login";
import { routePath } from "./path";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={routePath.LOGIN} replace />,
  },
  {
    path: routePath.LOGIN,
    element: <Login />,
  },
  {
    path: routePath.MYPAGE,
    element: <MyPage />,
  },
]);

export default router;
