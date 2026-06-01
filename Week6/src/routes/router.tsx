import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home";
import MovieDetail from "../pages/move-detail/movie-detail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movie/:id",
    element: <MovieDetail />,
  },
]);
