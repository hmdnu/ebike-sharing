import Cookies from "js-cookie";
import { Outlet, Navigate } from "react-router-dom";

export default function AuthProvider() {
  const token = Cookies.get("auth");

  return <div>{token ? <Outlet /> : <Navigate to={"/login"} />}</div>;
}
