import { createBrowserRouter, Navigate } from "react-router";
import MyPage from "../pages/my-page/my-page";
import SignUp from "@pages/signup/signup";
import Login from "../pages/login/login";
import { routePath } from "./path";
import Header from "@shared/ui/header";
import Members from "@pages/members/members";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={routePath.LOGIN} replace />,
  },

  {
    path: routePath.SIGNUP,
    element: <SignUp />,
  },
  {
    path: routePath.LOGIN,
    element: <Login />,
  },
  {
    Component: Header,
    children: [
      {
        path: routePath.MYPAGE,
        element: <MyPage />,
      },
      {
        path: routePath.MEMBERS,
        element: <Members />,
      },
    ],
  },
]);

export default router;
