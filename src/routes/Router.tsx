import { createBrowserRouter } from "react-router-dom";
import AuthenticationPage from "../pages/authenticationPage/AuthenticationPage";
import HomePage from "../pages/homePage/HomePage";
const routes = createBrowserRouter([
  {
    path: "*",
    element: <h1>OOPS PAGE NOT FOUND ! :(</h1>,
  },
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path: "/login",
    element: <AuthenticationPage />,
  },
  {
    path: "/register",
    element: <AuthenticationPage />,
  },
]);

export default routes;
