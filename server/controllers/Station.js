import Station from "../models/Station.js";

export async function getStation(req, res) {
  try {
    const station = await Station.find().populate({
      path: "bike.historyRenter.renter",
    });

    return res.status(200).json({ station, message: "fetch station success", success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "fetch station failed", success: false });
  }
}

export async function createStation(req, res) {
  const { station, bike } = req.body;

  try {
    const stations = await Station.create({ station, bike });

    return res.json({ stations, message: "station created successfully", success: true });
  } catch (error) {
    console.log(error);
    return res.json({ message: "error" });
  }
}

export async function updateStation(req, res) {
  const { stationId, bikeCode } = req.params;
  const { renter } = req.body;

  try {
    const stations = await Station.findById(stationId);
    stations.bike
      .find((bike) => bike.bikeCode === parseInt(bikeCode))
      .historyRenter.push({ renter });

    await stations.save();
    return res.status(200).json({ message: "update station success", success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "update station failed", success: false });
  }
}

export async function getIndividualBike(req, res) {
  const { id } = req.params;

  try {
    const bike = await Station.findById(id);

    return res.status(200).json({ bike, message: "fetch station success", success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "fetch station failed", success: false });
  }
}
