import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../components";
import { profilePic, loadingWheel } from "../assets/images";
import { baseApiUrl, tableHead } from "../constant";
import promiseResolver from "../utils/promiseResolver";
import { dateNow, timeNow } from "../utils/getDate";
import date from "date-and-time";

function NotificationStamp({ notificationTime }) {
  const [timeAgo, setTimeAgo] = useState("");

  const currentTime = new Date();
  // const notificationTime = new Date(`${time.dateRent} ${time.time}`);
  console.log(notificationTime);
  const diffInMilliseconds = currentTime - notificationTime;

  const units = [
    { label: "year", duration: 365 * 24 * 60 * 60 * 1000 },
    { label: "month", duration: 30 * 24 * 60 * 60 * 1000 },
    { label: "day", duration: 24 * 60 * 60 * 1000 },
    { label: "hour", duration: 60 * 60 * 1000 },
    { label: "minute", duration: 60 * 1000 },
  ];

  for (const unit of units) {
    const value = Math.floor(diffInMilliseconds / unit.duration);
    if (value >= 1) {
      setTimeAgo(`${value} ${unit.label}${value === 1 ? "" : "s"} ago`);
      return;
    }
  }

  setTimeAgo("Just now");

  return <h1>{timeAgo}</h1>;
}

export default function Profile() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [rentals, setRentals] = useState([]);
  const [notif, setNotif] = useState(false);

  const [notifTime, setNotifTime] = useState({ dateRent: "", time: "" });

  let { userId } = useParams();

  useEffect(() => {
    document.title = "Profile";
  }, []);

  // get user data
  useEffect(() => {
    (async () => {
      setLoading(true);
      const userHistoryRental = await fetch(`${baseApiUrl}/user/${userId}`);
      const [data, error] = await promiseResolver(userHistoryRental);

      if (data) {
        const res = await data.json();

        setUser(res.user);
        setRentals(res.user.historyRental);
        setLoading(false);
      }
      if (error) {
        console.error(error);
      }
    })();
  }, []);

  // edit user bike status
  async function handleUserBikeStatus(station, bikeCode, status) {
    const isReturnBike = confirm("Sure want to return bike?");
    const bike = user.historyRental.find((bike) => bike.station === station && bike.bikeCode === bikeCode);

    if (isReturnBike) {
      status = false;
      const user = await fetch(`${baseApiUrl}/user/edit-bike-status/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ station, bikeCode, status, returnedTime: timeNow }),
      });
      const [data, error] = await promiseResolver(user);
      if (data) {
        const res = await data.json();
        location.reload();
      }
      if (error) console.error(error);
    }
  }

  return (
    <>
      <Navbar />
      <div className="w-[80%] m-auto flex justify-center items-center pt-20">
        <div className="w-full flex gap-[10px]">
          {/* user profile */}
          <aside className="md:w-[285px] w-full bg-secondary p-8 rounded-[10px] h-fit relative font-">
            {loading ? (
              <img src={loadingWheel} className="animate-spin w-[80px] m-auto" alt="loading" />
            ) : (
              <div>
                <div className="flex items-center gap-4 mb-11">
                  <img src={profilePic} alt="profile" />
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
                    <h2></h2>
                  </div>
                  <div>
                    <button className="bg-red-500 px-2 py-1 rounded-md text-white font-bold">Delete History</button>
                  </div>
                </div>
              </div>
            )}
          </aside>

          <section className="max-md:hidden w-full flex flex-col  gap-2 font-bold">
            <div className="grid grid-cols-5 place-items-start rounded-md px-9 py-5 text-white bg-[#0C0E10]">
              {tableHead.map((item, i) => (
                <span key={i}>
                  <h1>{item.text}</h1>
                </span>
              ))}
            </div>
            {loading ? (
              <img src={loadingWheel} className="animate-spin w-[80px] m-auto" alt="loading" />
            ) : (
              <>
                {rentals.length === 0 ? (
                  <h1 className="text-center">Empty</h1>
                ) : (
                  <>
                    {rentals.map((rental) => (
                      <div
                        key={rental._id}
                        className={`grid grid-cols-5 items-center rounded-md px-9 py-5 text-black 
                        ${rental.isRented ? "bg-primary" : "bg-secondary"} place-items-start`}
                      >
                        <h1>00{rental.bikeCode}</h1>
                        <h1>{rental.dateRent}</h1>
                        <h1>{rental.pickUpTime}</h1>
                        {/* <div>
                          {!rental.returnedTime ? (
                            <NotificationStamp
                              notificationTime={{ dateRent: rental.dateRent, time: rental.returnedTime }}
                            />
                          ) : (
                            "-"
                          )}
                        </div> */}

                        <button
                          disabled={rental.isRented ? false : true}
                          onClick={() => {
                            handleUserBikeStatus(rental.station, rental.bikeCode, rental.isRented);
                          }}
                          className={`${rental.isRented ? "bg-white" : "bg-slate-200"} px-2 py-1 rounded-md`}
                        >
                          {rental.isRented ? "Active" : "Returned"}
                        </button>
                      </div>
                    ))}
                  </>
                )}
              </>
            )}
            <div className="flex flex-col-reverse gap-2"></div>
          </section>
        </div>
      </div>
    </>
  );
}
