import { Schema, model } from "mongoose";

// const historySchema = new Schema({
//   renter: {
//     type: Schema.Types.ObjectId,
//     ref: "Rental",
//   },
// });

// const bikeSchema = new Schema({
//   bikeNumber: Number,
//   renterHistory: {
//     type: [historySchema],
//     default: [],
//   },
// });

// const StationSchema = new Schema({
//   station: Number,
//   bike: {
//     type: [bikeSchema],
//     default: [],
//   },
// });

const StationSchema = new Schema({
  station: Number,
  bike: [
    {
      bikeNumber: Number,
      renter: [
        {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
      ],
    },
  ],
});

const Station = model("Station", StationSchema);
export default Station;
