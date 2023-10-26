import { useEffect, useState } from "react";
import LoadingCard from "./LoadingCard";
import Modal from "./Modal";

export default function Card() {
  const [stations, setStations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [bikeId, setBikeId] = useState();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const data = await fetch(`${import.meta.env.VITE_API_URL}/station`);
        const res = await data.json();

        if (res.success) {
          setStations(res.station);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  useEffect(() => {
    const body = document.querySelector("body");

    if (showModal) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
  }, [showModal]);

  function handleShowModal(bikeId) {
    setShowModal((prev) => !prev);
    setBikeId(bikeId);
  }

  function handleCloseModal(e) {
    if (e.target.id === "container") {
      setShowModal(false);
    }
  }

  return (
    <div className="w-full">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[30px]">
        {loading ? (
          <LoadingCard stations={stations} />
        ) : (
          <>
            {stations[0]?.bike.map((bike) => (
              <div
                key={bike._id}
                className="bg-secondary rounded-lg shadow px-5 sm:px-9 py-5 max-sm:flex items-center justify-between gap-10"
              >
                <div>
                  <h1 className="mb-2 text-base font-bold tracking-tight text-gray-900 text-center">
                    BIKE CODE : {`00${bike.bikeCode}`}
                  </h1>
                  <img
                    className="w-52 sm:w-60 flex mx-auto py-5"
                    src="src/assets/images/bike.png"
                    alt=""
                  />
                </div>

                <div>
                  <button
                    onClick={() => handleShowModal(bike.bikeCode)}
                    className="items-center px-3 py-2 text-center w-full font-bold text-base bg-primary rounded-lg focus:ring-4 focus:outline-none"
                  >
                    RENT
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      {showModal && (
        <div
          onClick={handleCloseModal}
          id="container"
          className="fixed z-50 w-full h-screen top-0 left-0 flex justify-center items-center bg-[rgba(0,0,0,.5)]"
        >
          <Modal bikeId={bikeId} showModal={showModal} setShowModal={setShowModal} />
        </div>
      )}
    </div>
  );
}
