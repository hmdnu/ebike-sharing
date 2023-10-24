import Rental from "../models/Rental.js";

export async function createRental(req, res) {
  const { renter, bikeNumber, station, status, dateRent } = req.body;

  try {
    const rental = await Rental.create({
      renter,
      bikeNumber,
      station,
      status,
      dateRent,
    });

    return res.status(200).json({ rental, message: "rental success", success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "failed to rental", success: false });
  }
}

export async function getRental(req, res) {
  try {
    const rental = await Rental.find();

    return res.status(200).json({ rental, message: "fetching rental success", success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "failed to fetch", success: false });
  }
}

export async function getIndividualRenters(req, res) {
  const { id } = req.params;

  try {
    const renters = await Rental.findById(id);

    return res.status(200).json({ renters, message: "fetching renters success", success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "failed to fetch", success: false });
  }
}

export async function updateRental(req, res) {
  const { renter, bikeNumber, station, status, rentDuration, dateRent } = req.body;
  const { id } = req.params;
  try {
    await Rental.findByIdAndUpdate(id, {
      renter,
      bikeNumber,
      station,
      status,
      rentDuration,
      dateRent,
    });

    return res.status(200).json({ message: "update renters success", success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "failed to update renters", success: false });
  }
}
