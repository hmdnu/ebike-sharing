import QrCode from "./QrCode";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import promiseResolver from "../utils/promiseResolver";

import { dateRent, pickUpTime } from "../utils/getDate";
import { bikeImage, loadingWheel, qrcode } from "../assets/images";
import { useEffect, useState } from "react";

import { baseApiUrl } from "../constant";

function Modal({ bikeId, setShowModal, station }) {
  const [loading, setLoading] = useState(false);
  const [showQr, setShowQr] = useState(false);
  const [bikeStatus, setBikeStatus] = useState(true);
  const [rentalData, setRentalData] = useState({});

  const token = Cookies.get("auth");
  const user = jwtDecode(token);

  // get rental
  useEffect(() => {
    (async () => {
      const userRental = await fetch(`${baseApiUrl}/rental/${user.id}`);

      const [data, error] = await promiseResolver(userRental);

      if (data) {
        const res = await data.json();
        console.log(res);
      }
    })();
  }, []);

  async function handleCreateRental() {
    setLoading(true);
    const newRental = await fetch(`${baseApiUrl}/rental/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        renter: user?.id,
        bikeCode: bikeId,
        station,
        status: bikeStatus,
        pickUpTime,
        dateRent,
      }),
    });

    const [data, error] = await promiseResolver(newRental);

    if (data) {
      const res = await data.json();

      setRentalData({
        bikeCode: res.renter.bikeCode,
        station: res.renter.station,
        pickUpTime: res.renter.pickUpTime,
        dateRent: res.renter.dateRent,
      });

      console.log({ ...rentalData });
      setLoading(false);
      setShowQr(true);
    }

    if (error) {
      setLoading(false);
      console.error(error);
    }
  }

  async function handleEditUserHistoryRental() {
    const userHistory = await fetch(
      `${import.meta.env.VITE_API_URL}/user/edit/${user.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      },
    );

    const [data, error] = await promiseResolver(userHistory);

    if (data) {
      const res = await data.json();
      console.log(res);
    }

    if (error) console.error(error);
  }

  async function handleSubmitRental() {
    try {
      await handleCreateRental();
      await handleEditUserHistoryRental();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="rounded-2xl bg-white">
      {showQr ? (
        <QrCode bikeId={bikeId} />
      ) : (
        <div className="sm:p-10 p-7 sm:w-[400px] w-[320px]">
          <h1 className="text-center font-bold text-xl mb-6">BIKE CODE : 00{bikeId}</h1>
          <img src={bikeImage} alt="bike" className="m-auto mb-9 w-52 sm:w-full" />
          <h1 className="text-center font-bold text-2xl mb-9">Rent this bike?</h1>
          <div className="w-full flex flex-col gap-3 font-bold">
            <button
              disabled={loading ? true : false}
              onClick={handleSubmitRental}
              className="bg-primary h-[50px] rounded-md"
            >
              {loading ? (
                <img
                  src={loadingWheel}
                  alt="loading"
                  className="w-7 m-auto animate-spin"
                />
              ) : (
                "RENT"
              )}
            </button>
            <button
              onClick={() => setShowModal((prev) => !prev)}
              className="bg-secondary h-[50px]"
            >
              CANCEL
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
