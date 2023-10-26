import { bike } from "../assets/images";
import { useEffect } from "react";

export default function Modal({ bikeId, showModal, setShowModal }) {
  return (
    <div className="flex flex-col items-center justify-center p-5 w-[400px] h-[500px] rounded-2xl bg-white">
      <div>
        <h1 className="text-center font-bold text-xl mb-6">BIKE CODE : 00{bikeId}</h1>

        <img src={bike} alt="bike" className="m-auto mb-9" />

        <h1 className="text-center font-bold text-2xl mb-9">Rent this bike?</h1>

        <div className="w-full flex flex-col gap-3 font-bold">
          <button className="bg-primary h-[50px] rounded-md">RENT</button>
          <button onClick={() => setShowModal((prev) => !prev)} className="bg-secondary h-[50px]">
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
}
