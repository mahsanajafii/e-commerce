import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import PubicRoutes from "./routes/PublicRoutes";
import PrivateRoute from "./components/privateRoutes/PrivateRoutes";

const isAuth = true;

const router = createBrowserRouter([
  ...PubicRoutes.routes,
  {
    path: "/*",
    element: (
      <PrivateRoute
        element={<AppRoutes />}
        isAuthentication={isAuth}
      ></PrivateRoute>
    ),
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
