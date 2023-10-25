import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import userImg from "../assets/images/profile.png";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  let { userId } = useParams();

  const token = Cookies.get("auth");
  const user = jwtDecode(token);

  useEffect(() => {}, []);

  return (
    <nav className="bg-white fixed top-0 left-0 w-full shadow-md h-[55px] flex items-center z-50">
      <div className="w-[80%] m-auto flex justify-between relative">
        <h1 className="font-bold text-2xl">E BIKE</h1>

        <img
          onClick={() => setDropdown((prev) => !prev)}
          className="w-9 cursor-pointer"
          src={userImg}
          alt="user"
        />
        {/* dropdown */}
        {dropdown && (
          <div
            id="dropdown"
            className="w-[180px] font-medium absolute right-0 bottom-[-60px] bg-white shadow-md rounded-md px-3 py-1 flex flex-col"
          >
            <NavLink to={`profile/${user.id}`}>Profile</NavLink>
            <button className="w-fit">Log out</button>
          </div>
        )}
      </div>
    </nav>
  );
}
