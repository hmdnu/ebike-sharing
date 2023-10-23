import { Schema, model } from "mongoose";

const RentalSchema = new Schema({
  renter: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  bikeNumber: {
    type: Number,
    required: true,
  },

  station: {
    type: Number,
    required: true,
  },

  status: {
    type: Boolean,
    default: false,
  },

  rentDuration: {
    type: Number,
    default: 0,
  },

  dateRent: {
    type: String,
  },
});

const Rental = model("Rental", RentalSchema);
export default Rental;
