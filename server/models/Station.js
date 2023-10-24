import { Schema, model } from "mongoose";

const StationSchema = new Schema({
  station: Number,
  bike: [
    {
      bikeCode: Number,
      historyRenter: [
        {
          renter: {
            type: Schema.Types.ObjectId,
            ref: "User",
          },
        },
      ],
    },
  ],
});

const Station = model("Station", StationSchema);
export default Station;
