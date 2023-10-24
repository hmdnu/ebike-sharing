export default function Card() {
  return (
    <div className="my-20 mx-[165px]">
      <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow">
        <div className="p-10">
          <a href="#">
            <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 text-center">
              BIKE CODE : 005{" "}
            </h5>
          </a>
        </div>
        <a href="#">
          <img
            className="rounded-t-lg p-9 flex mx-auto py-5"
            src="src/assets/images/bike.png"
            alt=""
          />
        </a>
        <div className="p-9">
          <button
            href="#"
            className=" items-center px-3 py-2 text-center w-full font-bold text-base bg-primary rounded-lg focus:ring-4 focus:outline-none"
          >
            RENT{" "}
          </button>
        </div>
      </div>

      {/* <div classNameName="font-urban">
        <div className="px-40 py-10">
          <div className="flex space-x-20 mt-10">
            <div className="basis-1/3 bg-gray-100 rounded-xl p-10">
              <h1 className="text-center font-bold text-base">BIKE CODE : 005</h1>
              <img className="py-10 flex mx-auto w-[10rem]" src="src/assets/images/bike.png" />
              <button
                className="text-base font-semibold rounded-md p-2 bg-primary text-center w-full"
                id="open"
              >
                RENT BIKE
              </button>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!-- end dashboard client --> */}
      {/* <!-- modal --> */}
      {/* <div
          class="w-full h-full mt-0 ml-0 fixed top-0 left-0 flex bg-[rgba(0,0,0,.5)] items-center"
          id="modal-container"
        >
          <div class="w-80 rounded-xl mx-auto bg-white p-10">
            <img class="flex mx-auto" src="./img/bike.png" />
            <h1 class="py-5 font-bold text-center text-2xl">Rent this bike ?</h1>
            <div class="rounded-md my-4 p-2 bg-primary text-center">
              <button class="text-base font-bold">RENT</button>
            </div>
            <div class="rounded-md p-2 bg-gray-300 text-center">
              <button class="text-base font-bold cursor-pointer" id="close">
                CANCEL
              </button>
            </div>
          </div>
        </div> */}
      {/* <!-- end modal --> */}
    </div>
  );
}
