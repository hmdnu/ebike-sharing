import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// layouts
import { Root } from "./layouts";
// pages
import { Home, Profile, Login } from "./pages";
import { AuthProvider } from "./components";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="login" element={<Login />} />
        <Route element={<AuthProvider />}>
          <Route index element={<Home />} />
          <Route path="profile/:userId" element={<Profile />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
