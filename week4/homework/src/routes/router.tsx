import { createBrowserRouter, Navigate } from "react-router";
import MyPage from "../pages/my-page/my-page";
import SignUp from "@pages/signup/signup";
import Login from "../pages/login/login";
import { routePath } from "./path";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={routePath.LOGIN} replace />,
  },
  {
    path: routePath.MYPAGE,
    element: <MyPage />,
  },
  {
    path: routePath.SIGNUP,
    element: <SignUp />,
  },
  {
    path: routePath.LOGIN,
    element: <Login />,
  },
]);

export default router;
