import Station from "../models/Station.js";

export async function getStation(req, res) {
  try {
    const station = await Station.find().populate("bike");

    return res
      .status(200)
      .json({ station, message: "fetch station success", success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "fetch station failed", success: false });
  }
}

export async function updateStation(req, res) {
  const { renter } = req.body;
  const { id, index } = req.params;

  try {
    const station = await Station.findById(id);

    const bike = station.bike[index];

    await station.save();

    console.log(bike);
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

    return res
      .status(200)
      .json({ bike, message: "fetch station success", success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "fetch station failed", success: false });
  }
}
