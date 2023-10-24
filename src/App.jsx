import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// layouts
import { Root } from "./layouts";
// pages
import { Home } from "./pages";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
