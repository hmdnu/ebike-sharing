import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
import { useEffect, useState } from "react";

export default function Root() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
