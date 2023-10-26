import { NavLink } from "react-router-dom";

export default function DropdownProfile({ handleCloseDropDown, handleLogout, user }) {
  return (
    <div
      id="container-1"
      onClick={handleCloseDropDown}
      className="fixed w-full h-screen top-0 left-0"
    >
      <div
        id="container-2"
        className="absolute m-auto w-[80%] h-screen top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <div className="w-[140px] flex flex-col gap-1 px-4 py-2 rounded-md shadow-md font-normal absolute bg-white right-0 top-14">
          <NavLink
            className="w-full hover:bg-slate-200 rounded-md px-2 py-1 transition-all"
            to={`profile/${user.id}`}
          >
            Profile
          </NavLink>
          <button
            className="text-start w-full hover:bg-slate-200 rounded-md px-2 py-1 transition-all"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
