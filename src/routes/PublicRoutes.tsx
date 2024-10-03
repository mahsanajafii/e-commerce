import {
  HomePage,
  ShopPage,
  FavoritesPage,
  ProductPage,
  AuthenticationPage,
  NotFoundPage,
  DashBoardPage,
} from "../pages/index/pages";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "",
        element: <DashBoardPage />,
      },
      {
        path: "/login",
        element: <AuthenticationPage />,
      },
      {
        path: "/register",
        element: <AuthenticationPage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/favorites",
        element: <FavoritesPage />,
      },

      {
        path: "/product",
        element: <ProductPage />,
      },

      {
        path: "/comments",
        element: <ProductPage />,
      },

      {
        path: "/createComment",
        element: <ProductPage />,
      },

      {
        path: "/related-products",
        element: <ProductPage />,
      },
    ],
  },
]);

export default routes;
