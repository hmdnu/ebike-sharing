import QrCode from "./QrCode";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import promiseResolver from "../utils/promiseResolver";

import { dateNow, timeNow } from "../utils/getDate";
import { bikeImage, loadingWheel, qrcode } from "../assets/images";
import { useState } from "react";

import { baseApiUrl } from "../constant";

function Modal({ bikeId, setShowModal, station, showModal }) {
  const [loading, setLoading] = useState(false);
  const [showQr, setShowQr] = useState(false);
  const [rentalData, setRentalData] = useState([]);

  const token = Cookies.get("auth");
  const user = jwtDecode(token);

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
        pickUpTime: timeNow,
        dateRent: dateNow,
      }),
    });

    const [data, error] = await promiseResolver(newRental);

    if (data) {
      const res = await data.json();
      console.log(res);

      localStorage.setItem(
        "rentalData",
        JSON.stringify({
          bikeCode: res.renter.bikeCode,
          station: res.renter.station,
          pickUpTime: res.renter.pickUpTime,
          dateRent: res.renter.dateRent,
          isRented: res.renter.isRented,
        }),
      );

      setLoading(false);
      setShowQr(true);
    }

    if (error) {
      setLoading(false);
      console.error(error);
    }
  }

  // push rentalData to historyRental
  async function handleEditUserHistoryRental() {
    const rentalData = localStorage.getItem("rentalData");

    const userHistory = await fetch(`${baseApiUrl}/user/edit/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: rentalData,
    });

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
              {loading ? <img src={loadingWheel} alt="loading" className="w-7 m-auto animate-spin" /> : "RENT"}
            </button>
            <button onClick={async () => setShowModal((prev) => !prev)} className="bg-secondary h-[50px]">
              CANCEL
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
