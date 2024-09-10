import { createBrowserRouter } from "react-router-dom";
import AuthenticationCard from "../components/authenticationCard/AuthenticationCard";
const routes = createBrowserRouter([
  {
    path: "*",
    element: <AuthenticationCard></AuthenticationCard>,
  },
  {
    path: "/login",
    element: <div>arash</div>,
  },
  {
    path: "/register",
    element: <h1>arash</h1>,
  },
]);

export default routes;
