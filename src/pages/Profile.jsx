import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../components";
import { profilePic, loadingWheel } from "../assets/images";

export default function Profile() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [rentals, setRentals] = useState([]);

  let { userId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await fetch(
          `${import.meta.env.VITE_API_URL}/user/${userId}` ||
            `http://localhost:5000/user/${userId}`,
        );
        const res = await data.json();

        if (res.success) {
          setLoading(false);
          setUser(res.user);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetch(`${import.meta.env.VITE_API_URL}/rental/${userId}`);
        const res = await data.json();

        if (res.success) {
          setRentals(res.rental);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  useEffect(() => {
    document.title = "Profile";
  }, []);

  return (
    <>
      <Navbar />
      <div className="w-[80%] m-auto flex justify-center items-center pt-20">
        <div className="w-full flex gap-[30px]">
          {/* user profile */}
          <aside className="sm:w-[285px] w-full bg-secondary p-8 rounded-[10px] h-fit relative font-">
            {loading ? (
              <img
                src={loadingWheel}
                className="animate-spin w-[80px] m-auto"
                alt="loading"
              />
            ) : (
              <div>
                <div className="flex items-center gap-4 mb-11">
                  <img src={profilePic} alt="" />
                  <div>
                    <h1 className="text-xl font-bold mb-1">{user.nama}</h1>
                    <h2>{user.nim}</h2>
                  </div>
                </div>
                <div className="flex flex-col gap-[26px]">
                  <div>
                    <h1 className="font-bold">Jurusan</h1>
                    <h2>{user.jurusan}</h2>
                  </div>
                  <div>
                    <h1 className="font-bold">Prodi</h1>
                    <h2>{user.prodi}</h2>
                  </div>
                  <div>
                    <h1 className="font-bold">No Hp.</h1>
                    <h2>{user.noHp}</h2>
                  </div>
                  <div>
                    <h1 className="font-bold">Email</h1>
                    <h2>{user.email}</h2>
                  </div>
                </div>
              </div>
            )}
          </aside>

          <section className="max-sm:hidden w-full flex flex-col gap-2 font-bold">
            <div className="grid grid-cols-5 rounded-md px-9 py-5 text-white bg-[#0C0E10]">
              <h1>BIKE CODE</h1>
              <h1>Date</h1>
              <h1>Pick Up Time</h1>
              <h1>Return Time</h1>
              <h1>Status</h1>
            </div>

            {/* {rentals.map((rental) => (
              <div
                className={`grid grid-cols-5 rounded-md px-9 py-5 text-black ${
                  rental.status ? "bg-primary" : "bg-secondary"
                } place-items-start`}
              >
                <h1>00{rental.bikeCode}</h1>
                <h1>{rental.dateRent}</h1>
                <h1>{rental.pickUpTime}</h1>
                <h1>-</h1>
                <h1>{rental.status ? "Active" : "Returned"}</h1>
              </div>
            ))} */}
          </section>
        </div>
      </div>
    </>
  );
}
