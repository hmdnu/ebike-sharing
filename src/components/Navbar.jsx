import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { profilePic, notifPic } from "../assets/images";

import DropdownProfile from "./DropdownProfile";
import DropdownNotif from "./DropdownNotif";

import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

export default function Navbar() {
  const [dropdownProfile, setDropdownProfile] = useState(false);
  const [dropdownNotif, setDropdownNotif] = useState(false);

  const token = Cookies.get("auth");

  const navigate = useNavigate();

  let user;
  if (token) user = jwtDecode(token);

  function handleLogout() {
    const isLogout = confirm("logout?");

    if (isLogout) {
      Cookies.remove("auth");

      navigate("/login");
    }
  }

  function handleCloseDropdownProfile(e) {
    if (e.target.id === "container-1" || e.target.id === "container-2") {
      setDropdownProfile(false);
    }
  }

  function handleCloseDropdownNotif(e) {
    if (e.target.id === "container-1" || e.target.id === "container-2") {
      setDropdownNotif(false);
    }
  }

  return (
    <nav className="bg-white fixed top-0 left-0 w-full shadow-md h-[55px] flex items-center z-50">
      <div className="w-[80%] m-auto flex justify-between relative">
        <NavLink to={"/"} className="font-bold text-2xl">
          E BIKE
        </NavLink>

        {/* profile pic */}
        {user && (
          <div className="flex items-center gap-5">
            <img
              onClick={() => setDropdownNotif((prev) => !prev)}
              className="cursor-pointer"
              src={notifPic}
              alt="notification"
            />
            <img
              onClick={() => setDropdownProfile((prev) => !prev)}
              className="w-9 cursor-pointer"
              src={profilePic}
              alt="user"
            />
          </div>
        )}

        {/* dropdownProfile profile */}
        {dropdownProfile && (
          <DropdownProfile
            user={user}
            handleCloseDropDown={handleCloseDropdownProfile}
            handleLogout={handleLogout}
          />
        )}

        {/* dropdown notif */}
        {dropdownNotif && <DropdownNotif handleCloseDropdownNotif={handleCloseDropdownNotif} />}
      </div>
    </nav>
  );
}
