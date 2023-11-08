import { qrcode } from "../assets/images";

export default function QrCode({ bikeId }) {
  return (
    <div className="sm:p-10 p-7 sm:w-[400px] w-[320px]">
      <div className="flex flex-col items-center gap-2">
        <h1 className="font-bold">BIKE CODE : 00{bikeId}</h1>
        <img src={qrcode} alt="qrcode" className="sm:w-[230px] w-[200px]" />

        <div className="m-auto text-center">
          <h1 className="text-xl font-bold">THIS Is Your QR Code</h1>
          <p>Scan This QR Code In Bike Station To Unlock The Bike</p>
        </div>

        <div className="font-bold">
          <button className="bg-secondary py-4 hover:bg-slate-200 transition-all text-base w-full mb-3 rounded-md">
            SEND TO WHATSAPP
          </button>
          <button className="bg-secondary py-4 hover:bg-slate-200 transition-all text-base w-full rounded-md">
            SEND TO EMAIL
          </button>
        </div>
      </div>
    </div>
  );
}
