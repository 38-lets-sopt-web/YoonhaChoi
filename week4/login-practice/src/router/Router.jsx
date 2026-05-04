import { createBrowserRouter } from "react-router";
import MemberDetail from "../pages/MemberDetail";
import Home from "../pages/Home";
import Posts from "../pages/Posts";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/member/:id",
    Component: MemberDetail,
  },
  {
    path: "/posts",
    Component: Posts,
  },
]);

export default router;
