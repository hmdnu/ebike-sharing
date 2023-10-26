import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../components";
import { profilePic, loadingWheel } from "../assets/images";

export default function Profile() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

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
    document.title = "Profile";
  }, []);

  return (
    <>
      <Navbar />
      <div className="w-[80%] m-auto flex justify-center items-center pt-20">
        <div className="w-full flex gap-[30px]">
          {/* user profile */}
          <aside className="w-[285px] bg-secondary p-8 rounded-[10px] h-fit relative">
            {loading ? (
              <img src={loadingWheel} className="animate-spin w-[80px] m-auto" alt="loading" />
            ) : (
              <>
                <div className="flex items-center gap-3 mb-11">
                  <img src={profilePic} alt="" />
                  <div>
                    <h1>{user.nama}</h1>
                    <h2>{user.nim}</h2>
                  </div>
                </div>
                <div className="flex flex-col gap-[26px]">
                  <div>
                    <h1>Jurusan</h1>
                    <h2>{user.jurusan}</h2>
                  </div>
                  <div>
                    <h1>Prodi</h1>
                    <h2>{user.prodi}</h2>
                  </div>
                  <div>
                    <h1>No Hp.</h1>
                    <h2>{user.noHp}</h2>
                  </div>
                  <div>
                    <h1>Email</h1>
                    <h2>{user.email}</h2>
                  </div>
                </div>
              </>
            )}
          </aside>

          <section className="w-full flex flex-col gap-2 font-bold">
            <div className="grid grid-cols-5 rounded-md px-9 py-5 text-white bg-[#0C0E10]">
              <h1>BIKE CODE</h1>
              <h1>Date</h1>
              <h1>Pick Up Time</h1>
              <h1>Return Time</h1>
              <h1>Status</h1>
            </div>

            <div className="grid grid-cols-5 rounded-md px-9 py-5 text-black bg-primary place-items-start">
              <h1>005</h1>
              <h1>02/10/2023</h1>
              <h1>13:00 WIB</h1>
              <h1>-</h1>
              <h1>Active</h1>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
