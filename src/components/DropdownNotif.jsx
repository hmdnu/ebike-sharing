import { qrcode } from "../assets/images";

export default function DropdownNotif({ handleCloseDropdownNotif }) {
  return (
    <div
      onClick={handleCloseDropdownNotif}
      id="container-1"
      className="fixed w-full h-screen top-0 left-0"
    >
      <div
        id="container-2"
        className="absolute m-auto w-[80%] h-screen top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        {/* qr code container */}
        <div className="w-fit flex flex-col gap-1 p-[10px] rounded-sm shadow-md font-normal absolute bg-white right-[55px] top-14">
          {/* qr code */}
          <div className="flex flex-col gap-[10px]">
            <div className="bg-primary p-2 rounded-sm flex justify-between items-center gap-[54px] text-xs font-normal">
              <div className="flex items-center gap-[5px]">
                <img src={qrcode} className="w-10" alt="qrcode" />
                <p className="">Your rent was success</p>
              </div>

              <p className="text-[#0C0E10] opacity-70">Just now</p>
            </div>

            <div className="bg-secondary p-2 rounded-sm flex justify-between items-center gap-[54px] text-xs font-normal">
              <div className="flex items-center gap-[5px]">
                <img src={qrcode} className="w-10" alt="qrcode" />
                <p className="">Your rent was success</p>
              </div>

              <p className="text-[#0C0E10] opacity-70">2 days ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
